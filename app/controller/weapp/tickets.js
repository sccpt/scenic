'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */
const { Controller } = require('egg');

class TicketsController extends Controller {
  // 获取所有门票
  async getList() {
    const { ctx, service } = this;
    const result = await service.weapp.tickets.findList();
    ctx.returnBody(result, 100010);
  }

  // 获取指定的门票
  async getOne() {
    const { ctx, service } = this;
    const id = ctx.query.id;
    const result = await service.weapp.tickets.findOne(id);
    ctx.returnBody(result, 100010);
  }

  // 获取库存情况
  async getStocks() {
    const { ctx, service } = this;
    const result = await service.weapp.tickets.findStocks();
    ctx.returnBody(result, 100010);
  }

  // 下订单
  async create() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.buyTickets');
    if (!validateResult) return;
    let query = ctx.request.body;
    query.createdAt = new Date();
    query.uid = query.openid;
    query.from_type = 1;
    query.status = 0;
    query.pay_type = 1;
    query.pay_status = 0;
    const result = await service.weapp.tickets.create(query);
    if (result) {
      ctx.returnBody(result, 100020);
    } else {
      ctx.returnBody('订单创建失败', 400);
    }
  }

  // 获取订单信息
  async getOrder() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      uid: ctx.request.body.openid,
    };
    if (ctx.query.status) {
      query.status = ctx.query.status;
    }
    const result = await service.weapp.tickets.findOrder(query);
    ctx.returnBody(result, 100010);
  }

  // 取消订单
  async cancel() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.cancelTickets');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.uid = query.openid;
    query.id = ctx.helper.parseInt(query.id);
    const result = await service.weapp.tickets.cancel(query);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031);
    }
  }

  // 查询订单详情
  async orderShow() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
    if (!validateResult) return;
    const uid = ctx.request.body.openid;
    const id = ctx.helper.parseInt(ctx.params.id);
    const query = { uid, id };
    const result = await service.weapp.tickets.orderDetails(query);
    ctx.returnBody(result, 100010);
  }

}

module.exports = TicketsController;
