'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */

const BaseService = require("../../base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Tickets'
  }

  async findList(query, order = [['createdAt', 'DESC']]) {
    const { app } = this;
    let obj = {
      where: {},
      order,
      include: [
        {
          model: app.model.TicketsType,
          as: 'type',
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
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 获取库存
  async findStocks() {
    return await this.ctx.model.TicketsStock.findStocks();
  }

  // 获取今天明天后天剩余库存
  async findTodayStocks() {
    return await this.ctx.model.TicketsStock.findToday();
  }
}

module.exports = Service;
