'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */
const Service = require('egg').Service;
const { Op } = require('sequelize');

class WeappFoodService extends Service {
  // 获取所有门票
  async findList() {
    return await this.ctx.model.Tickets.findAll({
      where: {
        isTeam: 0,
      },
      include: [{
        model: this.ctx.model.TicketsType,
        as: 'type',
        attributes: ['id', 'name', 'status'],
      }],
      order: [['createdAt', 'DESC']],
    });
  }

  // 获取库存
  async findStocks() {
    return await this.ctx.model.TicketsStock.findStocks();
  }

  // 查找指定门票
  async findOne(id) {
    return await this.ctx.model.Tickets.findOne({
      where: {
        id,
      }
    });
  }

  // 下单
  async create(query) {
    const { app, ctx } = this;
    const tickets = await this.findOne(query.id);
    query.tickets = tickets;
    delete query.id;
    const res = await this.ctx.model.TicketsOrders.weappCreate(query);
    if (res) {
      // 超过30分钟自动取消订单
      app.addDelayTask('cancelOrder', res.id, {}, 1800);
      // 推送新订单消息
      // await ctx.service[app.config.public].admin.system.notice.send('new_tickets', {
      //   title: '购票信息',
      //   content: `有客户购买了“${res.time}”的门票${res.num}张！`,
      //   createdAt: query.createdAt,
      // });
    }
    return res;
  }

  // 获取详情
  async findByPk(id) {
    const { app } = this;
    return await this.ctx.model.Tickets.findOne({
      where: { id },
    });
  }

  // 查询订单
  async findOrder(query) {
    const where = {
      uid: query.uid,
    };
    if (query.status) {
      where.status = query.status;
    }
    return await this.ctx.model.TicketsOrders.findAll({
      where,
      order: [['createdAt', 'DESC']],
    });
  }

  // 取消订单
  async cancel(query) {
    const { app, ctx } = this;
    const res = await ctx.model.TicketsOrders.weappCancel(query);
    if (res) {
      // 推送消息
      if (query.time) {
        await ctx.service[app.config.public].admin.system.notice.send('cancel_tickets', {
          title: '取消购票',
          content: `有客户取消了“${query.time}”的票，请注意！`,
          createdAt: new Date(),
        });
      }
    }
    return res;
  }

  // 订单详情
  async orderDetails(where) {
    return await this.ctx.model.TicketsOrders.findOne({
      where,
    });
  }

}

module.exports = WeappFoodService;
