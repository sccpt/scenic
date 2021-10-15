'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-24
 */

const BaseService = require("../../base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { getTimeDistance, getDays } = require('../../../../utils/tools');

class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'TicketsOrders'
  }

  // 查询, 传页码，分页返回，否则全部返回
  async findList(query, order = [['createdAt', 'DESC']]) {
    let obj = {
      where: {},
      order,
      include: [
        {
          model: this.app.model.Tickets,
          attributes: ['id', 'name', 'isTeam'],
          as: 'tickets',
        },
        {
          model: this.app.model.Users,
          attributes: ['id', 'userName', 'nickName', 'mobile'],
          as: 'user',
        },
        {
          model: this.app.model.TicketsPeople,
          as: 'peoples',
          through: { attributes: [] },
          required: false
        },
      ]
    }
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10
      query.offset = (query.offset - 1) * query.limit
      obj.limit = query.limit
      obj.offset = query.offset
    } else {
      query.limit = null
      query.offset = null
    }
    if (query.time) {
      obj.where.time = query.time;
    }
    else if (query.startTime && query.endTime) {
      obj.where.time = {
        [Op.gte]: query.startTime,
        [Op.lte]: query.endTime,
      }
    }
    else if (query.tid) {
      obj.where.tid = query.tid;
    }
    else if (query.uid) {
      obj.where.uid = query.uid;
    }
    else {
      for (let key in query) {
        if (key !== 'limit' && key !== 'offset') {
          if (!query[key]) {
            query[key] = ''
          }
          obj.where[key] = {
            [Op.like]: '%' + query[key] + '%'
          }
        }
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 完成付款
  async webPay(query) {
    const res = await this.ctx.model[this.modelName].webPay(query.id);
    // 完成付款后，调用短信平台的接口，发送短信到客户手机

    // if (res) {
    //   await ctx.curl(`https://dysmsapi.aliyuncs.com/?Action=SendSms&PhoneNumbers=${res.mobile}&SignName=签名&TemplateCode=SMS_153055065&TemplateParam=${res.id}`);
    // }
    return res;
  }

  // 新增
  async create(query) {
    query.from_type = 1;
    query.status = 0;
    query.pay_type = 2;
    query.pay_status = 0;
    const tickets = await this.ctx.model.Tickets.findOne({
      where: {
        id: query.id,
      }
    });
    query.tickets = tickets;
    return await this.ctx.model[this.modelName].weappCreate(query);
  }

  // 修改
  async update(query, where) {
    return await this.ctx.model[this.modelName].webUpdate(query, {
      where
    });
  }

  // 删除
  async destroy(id) {
    return await this.ctx.model[this.modelName].webDelete(id);
  }

  // 验票
  async checkTicket(id) {
    return await this.ctx.model[this.modelName].checkTicket(id);
  }

  // 查询年度订单，并返回统计数据
  async getYearData() {
    const year = getTimeDistance('year');
    const thisWeek = getTimeDistance('week');
    const lastWeek = getTimeDistance('lastWeek');
    const today = getTimeDistance('today');
    const yesterday = getTimeDistance('yesterday');
    const nowYear = new Date().getFullYear();

    const res = await this.ctx.model[this.modelName].findAll({
      where: {
        [Op.and]: [
          {
            time: {
              [Op.gte]: year[0],
              [Op.lte]: year[1],
            }
          },
          { status: 2 },
        ]
      },
      include: [
        {
          model: this.app.model.Tickets,
          attributes: ['id', 'name'],
          as: 'tickets',
        },
      ],
      attributes: ['id', 'num', 'time', 'tid', 'from_type', 'price', 'status', 'pay_status'],
    });
    const cancelOrder = await this.ctx.model[this.modelName].findAll({
      where: {
        [Op.and]: [
          {
            time: {
              [Op.gte]: year[0],
              [Op.lte]: year[1],
            }
          },
          { status: 3 },
        ]
      },
      attributes: ['id'],
    });

    let yearTotalPrice = 0;
    let thisWeekPrice = 0;
    let lastWeekPrice = 0;
    let todayPrice = 0;
    let yesterdayPrice = 0;
    let totalSales = 0;
    const monthSales = [{ time: '01', price: 0, num: 0, pay: 0 }, { time: '02', price: 0, num: 0, pay: 0 }, { time: '03', price: 0, num: 0, pay: 0 }, { time: '04', price: 0, num: 0, pay: 0 }, { time: '05', price: 0, num: 0, pay: 0 }, { time: '06', price: 0, num: 0, pay: 0 }, { time: '07', price: 0, num: 0, pay: 0 }, { time: '08', price: 0, num: 0, pay: 0 }, { time: '09', price: 0, num: 0, pay: 0 }, { time: '10', price: 0, num: 0, pay: 0 }, { time: '11', price: 0, num: 0, pay: 0 }, { time: '12', price: 0, num: 0, pay: 0 }];
    const fromTypes = [{ type: 1, num: 0 }, { type: 2, num: 0 }, { type: 3, num: 0 }, { type: 4, num: 0 }, { type: 5, num: 0 }, { type: 6, num: 0 }, { type: 7, num: 0 }, { type: 8, num: 0 }];
    const ticketTypes = {};

    for (let i = 0; i < res.length; i++) {
      yearTotalPrice += res[i].price;
      totalSales += res[i].num;
      ticketTypes[res[i].tickets.name] = (ticketTypes[res[i].tickets.name] || 0) + 1;

      if (res[i].time >= thisWeek[0] && res[i].time <= thisWeek[1]) {
        thisWeekPrice += res[i].price;
      }
      if (res[i].time >= lastWeek[0] && res[i].time <= lastWeek[1]) {
        lastWeekPrice += res[i].price;
      }
      if (res[i].time == today) {
        todayPrice += res[i].price;
      }
      if (res[i].time == yesterday) {
        yesterdayPrice += res[i].price;
      }
      for (let j = 0; j < monthSales.length; j++) {
        if (res[i].time >= `${nowYear}-${monthSales[j].time}-01` && res[i].time <= `${nowYear}-${monthSales[j].time}-31`) {
          monthSales[j].price += res[i].price;
          monthSales[j].num += res[i].num;
          monthSales[j].pay += res[i].pay_status;
        }
      }
      for (let k = 0; k < fromTypes.length; k++) {
        if (res[i].from_type == fromTypes[k].type) {
          fromTypes[k].num += 1;
        }
      }
    }
    const ticketArr = [];
    for (const key in ticketTypes) {
      ticketArr.push({
        name: key,
        value: ticketTypes[key],
      });
    }

    return {
      total: {
        yearPrice: yearTotalPrice,
        weekTb: (((thisWeekPrice - lastWeekPrice) / lastWeekPrice || 0) * 100).toFixed(2),
        todayTb: (((todayPrice - yesterdayPrice) / yesterdayPrice || 0) * 100).toFixed(2),
        todayPrice,
      },
      sales: {
        total: totalSales,
      },
      pay: {
        total: res.length,
        conversion: ((res.length - cancelOrder.length) / res.length) * 100,
      },
      yearData: res,
      monthSales,
      fromTypes,
      ticketType: ticketArr,
    };
  }

  // 统计
  async statistics(query = {}) {
    let yearData = undefined;
    const redisData = this.ctx.helper.JSONParse(await this.app.redis.get('default').get('yearData'));
    // 如果缓存不存在，重新设置一次缓存
    if (!redisData) {
      yearData = await this.getYearData();
      await this.app.redis.get('default').setex('yearData', 3600 * 24, JSON.stringify(yearData));
    }
    const datas = redisData || yearData;
    if (query.startTime && query.endTime) {
      const days = getDays(query.startTime, query.endTime);
      const salesPrice = [];
      const salesNum = [];
      for (let j = 0; j < days.length; j++) {
        salesPrice.push({ name: days[j], value: 0 });
        salesNum.push({ name: days[j], value: 0 });
      }
      for (let i = 0; i < datas.yearData.length; i++) {
        for (let k = 0; k < salesPrice.length; k++) {
          if (salesPrice[k].name == datas.yearData[i].time) {
            salesPrice[k].value += datas.yearData[i].price;
            salesNum[k].value += datas.yearData[i].num;
          }
        }
      }
      delete datas.yearData;
      return {
        ...datas,
        salesPrice,
        salesNum,
      }
    }
    delete datas.yearData;
    return datas;
  }

}

module.exports = Service;
