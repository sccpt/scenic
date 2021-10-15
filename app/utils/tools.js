
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const path = require('path');
const moment = require('moment');

// 校验有 /* 的白名单
function checkWhiteList(ctx, list) {
  list = list.map(item => item.substring(0, item.lastIndexOf('/*')))
  let flag = false
  list.forEach(item => {
    if (item === ctx.request.path.substring(0, item.length)) {
      flag = true
    }
  })
  return flag
}

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname, '/'))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

/**
 *
 * @param data 数据源
 * @param id字段 默认 'id'
 * @param parentId 父节点字段 默认 'parentId'
 * @param children 孩子节点字段 默认 'children'
 * @param rootId 根Id 默认 0
 * @returns {{obj, list: Array}}
 */
function handleTree(data, id = 'id', parentId = 'parentId', children = 'children', rootId = 0) {
  const obj = {}
  data.forEach(item => {
    item[children] = []
    obj[item[id]] = item
  })
  const tree = []
  data.forEach(list => {
    if (list[parentId] !== rootId) {
      obj[list[parentId]][children].push(list)
    } else {
      tree.push(list)
    }
  })
  return {
    tree,
    obj
  }
}

// 获取本部门及以下id
function getIdLists(arr, ids = [], id = 'id') {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children.length) {
      ids.push(arr[i][id])
      getIdLists(arr[i].children, ids, id)
    } else {
      ids.push(arr[i][id])
    }
  }
  return ids
}

// 返回部门的查询条件
function getDeptWhere(ctx, where = {}) {
  let dataScopeList = ctx.state.user.roles.map(item => parseInt(item.dataScope))
  let dataScope = Math.max(...dataScopeList)
  if (dataScope === 1) { // 部门及以下权限
    if (where.deptId) {
      where.deptId = {
        [Op.or]: getIdLists(ctx.state.departmentsObj.obj[where.deptId].children, [where.deptId], 'deptId')
      }
    } else {
      where.deptId = {
        [Op.or]: getIdLists(ctx.state.departmentsObj.obj[ctx.state.user.deptId].children, [ctx.state.user.deptId], 'deptId')
      }
    }
  } else if (dataScope === 2) { // 部门权限
    where.deptId = {
      [Op.or]: [ctx.state.user.deptId]
    }
  } else { // 本人权限
    where.deptId = {
      [Op.or]: [ctx.state.user.deptId]
    }
    where.id = ctx.state.user.id
  }
  return where
}

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return Math.ceil(sum / arr.length);
}

function getDays(start_time, end_time) {
  let arr = [], startTime = moment(start_time).format('YYYY-MM-DD'),
    endTime = moment(end_time).format('YYYY-MM-DD');
  while (moment(startTime).isBefore(endTime)) {
    arr.push(startTime)
    startTime = moment(startTime).add(1, 'days').format('YYYY-MM-DD');
  }
  return arr;
};

function orderId() {
  return moment().format('YYYYMMDDHmmss') + Math.ceil(Math.random() * 100);
};

function changeData(data, titLen, subLen, type) {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    const str = data[i].content?.replace(/<.*?>/g, "");
    if (type) {
      arr.push({
        ...data[i],
        url: `/${type}/details/${data[i].id}.html`,
        subTitle: data[i].title?.length > titLen ? `${data[i].title?.substr(0, titLen)}...` : data[i].title,
        photo: data[i].photo || 'assets/images/nopic.jpg',
        title: data[i].title,
        content: str.length > subLen ? `${str?.substr(0, subLen)}...` : str,
      });
    } else {
      arr.push({
        ...data[i],
        subTitle: data[i].title?.length > titLen ? `${data[i].title?.substr(0, titLen)}...` : data[i].title,
        photo: data[i].photo || 'assets/images/nopic.jpg',
        title: data[i].title,
        content: str.length > subLen ? `${str?.substr(0, subLen)}...` : str,
      });
    }
  }
  return arr;
}

function getTimeDistance(type) {
  function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
  }
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    return moment().format('YYYY-MM-DD');
  }

  if (type === 'yesterday') {
    return moment().subtract(1, "days").format('YYYY-MM-DD');
  }

  if (type === 'week' || type === 'lastWeek') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;
    if (type === 'lastWeek') {
      return [moment(beginTime - (14 * oneDay - 1000)).format('YYYY-MM-DD'), moment(beginTime - (7 * oneDay - 1000)).format('YYYY-MM-DD')];
    }

    return [moment(beginTime).format('YYYY-MM-DD'), moment(beginTime + (7 * oneDay - 1000)).format('YYYY-MM-DD')];
  }

  const year = now.getFullYear();

  if (type === 'month') {
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      `${year}-${fixedZero(month + 1)}-01`,
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01`).valueOf() - 1000).format('YYYY-MM-DD'),
    ];
  }

  return [`${year}-01-01`, `${year}-12-31`];
}

function createPassword(pasLen) {
  var pasArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-', '$', '%', '&', '@', '+', '!'];
  var password = '';
  var pasArrLen = pasArr.length;
  for (var i = 0; i < pasLen; i++) {
    var x = Math.floor(Math.random() * pasArrLen);
    password += pasArr[x];
  }
  return password;
}

module.exports = {
  checkWhiteList,
  handleTree,
  getDeptWhere,
  mkdirsSync,
  getAverage,
  getDays,
  orderId,
  changeData,
  getTimeDistance,
  createPassword,
}
