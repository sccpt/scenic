'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-29
 */

const Service = require('egg').Service;
const { changeData } = require('../../utils/tools');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class BaseService extends Service {
  // 查询配置信息
  async findSeting() {
    return await this.ctx.model.Seting.findOne({
      where: {
        id: 23,
      }
    });
  }

  // 查询文章数据列表
  async findArticlesList(typeId, limit = undefined, isTop) {
    const where = {
      typeId,
    };
    if (isTop !== undefined) {
      where.isTop = isTop;
    }
    const res = await this.ctx.model.Articles.findAll({
      where,
      offset: 0,
      limit,
      order: [['createdAt', 'DESC']],
    });
    res.forEach((item) => {
      switch (typeId) {
        case 11:
          item.url = `/scenic/details/${item.id}.html`
          break;
        case 12:
          item.url = `/project/details/${item.id}.html`
          break;
        case 13: case 14: case 15: case 16: case 17: case 18:
          item.url = `/news/details/${item.id}.html`
          break;
        case 19: case 20: case 21: case 22: case 23:
          item.url = `/strategy/details/${item.id}.html`
          break;
        case 24:
          item.url = `/service/details/${item.id}.html`
          break;
        case 25:
          item.url = `/video/details/${item.id}.html`
          break;

        default:
          break;
      }
    });
    return res;
  }

  // 返回配置信息和导航栏目数据
  async findHeader(active) {
    const seting = await this.findSeting();
    const types = await this.ctx.model.ArticleType.findAll({
      where: {
        isNav: 1,
      }
    });
    const toTreee = (data) => {
      const result = []
      if (!Array.isArray(data)) {
        return result
      }
      data.forEach(item => {
        delete item.children;
      });
      const map = {};
      data.forEach(item => {
        map[item.id] = item;
        switch (item.id) {
          case 11:
            item.url = '/scenic';
            break;
          case 12:
            item.url = '/project';
            break;
          case 13:
            item.url = '/news';
            break;
          case 19:
            item.url = '/strategy';
            break;
          case 24:
            item.url = '/service';
            break;
          case 25:
            item.url = '/video';
            break;

          default:
            break;
        }
        switch (item.pid) {
          case 13:
            item.url = `/news/${item.id}.html`;
            break;
          case 19:
            item.url = `/strategy/${item.id}.html`;
            break;

          default:
            break;
        }
      });
      data.forEach(item => {
        const parent = item.pid ? map[item.pid] : false;
        item.value = item.id;
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          result.push(item);
        }
      });
      return result;
    }
    const nav = [{ id: 0, title: '首页', url: '/', children: [] }, ...toTreee(types)];
    for (let i = 0; i < nav.length; i++) {
      if (nav[i].id !== 0 && nav[i].isArt && (!nav[i].children || nav[i].children.length === 0)) {
        nav[i].children = await this.findArticlesList(nav[i].id);
      }
      if (nav[i].id === active) {
        nav[i].active = true;
      }
    }

    return {
      title: seting.title,
      logo: seting.logo,
      keywords: seting.keywords,
      description: seting.description,
      webStatus: seting.description,
      telephone: seting.telephone,
      adress: seting.adress,
      nav,
    };
  }

  // 查询, 传页码，分页返回，否则全部返回
  async findList(query, order = [['createdAt', 'DESC']]) {
    const obj = {
      where: {
        typeId: query.id,
      },
      order
    };
    const limit = query.limit ? query.limit : 10;
    if (query.offset) {
      query.limit = limit;
      const page = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = page;
    } else {
      query.limit = null
      query.offset = null
    }
    const type = await this.ctx.model.ArticleType.findOne({
      where: {
        id: query.id,
      },
    });
    const header = await this.findHeader(this.typeId);
    const res = await this.ctx.model.Articles.findAndCountAll(obj);
    const pages = [];
    if (query.offset == undefined || query.offset == 1) {
      pages.push({
        url: 'javascript:void(0)'
      });
    } else {
      pages.push({
        url: `/${this.typeName}/${query.id}.html?page=${query.offset - 1}`
      });
    }
    const totalPage = Math.ceil(res.count / limit);
    for (let i = 0; i < totalPage; i++) {
      if (query.offset == undefined || (i + 1) == query.offset) {
        pages.push({
          num: i + 1,
          url: `/${this.typeName}/${query.id}.html?page=${i + 1}`,
          active: 1
        });
      } else {
        pages.push({
          num: i + 1,
          url: `/${this.typeName}/${query.id}.html?page=${i + 1}`,
        });
      }
    }
    if (query.offset < totalPage) {
      pages.push({
        url: `/${this.typeName}/${query.id}.html?page=${query.offset + 1}`
      });
    } else {
      pages.push({
        url: 'javascript:void(0)'
      });
    }

    let menu = [];
    if (this.typeId === 13 || this.typeId === 19) {
      menu = await this.ctx.model.ArticleType.findAll({
        where: {
          pid: this.typeId,
        }
      });
      menu.forEach(item => {
        item.url = `/${this.typeName}/${item.id}.html`;
        if (query.id == item.id) {
          item.active = true;
        }
      });
    }

    return {
      rows: changeData(res.rows || [], 40, 220, this.typeName),
      pages,
      menu,
      typeName: type.title,
      header: {
        ...header,
        title: `${type.title}-${header.title}-第${query.offset || 1}页`,
        footTit: header.title,
      },
    };
  }

  // 查询某条数据
  async findByPk(id) {
    const header = await this.findHeader(this.typeId);
    const res = await this.ctx.model.Articles.findByPk(id);
    let menu = [];
    if (this.typeId === 13 || this.typeId === 19) {
      menu = await this.ctx.model.ArticleType.findAll({
        where: {
          pid: this.typeId,
        }
      });
      menu.forEach(item => {
        item.url = `/${this.typeName}/${item.id}.html`;
        if (res.typeId == item.id) {
          item.active = true;
        }
      });
    } else {
      menu = await this.ctx.model.Articles.findAll({
        where: {
          typeId: this.typeId,
        }
      });
      menu.forEach(item => {
        item.url = `/${this.typeName}/details/${item.id}.html`;
        if (id == item.id) {
          item.active = true;
        }
      });
    }
    return {
      details: res,
      menu,
      header: {
        ...header,
        footTit: header.title,
      },
    };
  }

}

module.exports = BaseService;
