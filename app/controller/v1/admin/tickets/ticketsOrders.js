'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-24
 */
const BaseController = require("../../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'ticketsOrders'
    this.modleName = 'tickets'
  }
  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      people: ctx.query.people,
    };
    if (ctx.query.time) {
      query.time = ctx.query.time;
    }
    if (ctx.query.startTime && ctx.query.endTime) {
      query.startTime = ctx.query.startTime;
      query.endTime = ctx.query.endTime;
    }
    if (ctx.query.tid) {
      query.tid = ctx.query.tid;
    }
    if (ctx.query.uid) {
      query.uid = ctx.query.uid;
    }
    if (ctx.query.from_type) {
      query.from_type = ctx.query.from_type;
    }
    if (ctx.query.pay_status) {
      query.pay_status = ctx.query.pay_status;
    }
    if (ctx.query.pay_type) {
      query.pay_type = ctx.query.pay_type;
    }
    if (ctx.state.user.id != 1) {
      query.uid = ctx.state.user.id;
    }
    if (ctx.query.status != undefined) {
      query.status = ctx.query.status;
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 完成付款
  async webPay() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, 'tickets' + '.pay')
    if (!validateResult) return
    const query = ctx.request.body;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].webPay(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 200);
    }
  }

  // 新增
  async create() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.buyTickets')
    if (!validateResult) return
    let query = ctx.request.body
    query.createdAt = new Date()
    query.createdBy = ctx.state.user.userName;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(result, 100020);
    } else {
      ctx.returnBody(null, 100021, 200);
    }
  }

  // 删除
  async destroy() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.params, 'base.destroy')
    if (!validateResult) return;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].destroy(ctx.params.id);
    if (result) {
      ctx.returnBody(null, 100040);
    } else {
      ctx.returnBody(null, 100041);
    }
  }

  // 验票
  async checkTicket() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, 'tickets' + '.pay')
    if (!validateResult) return
    const query = ctx.request.body;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].checkTicket(query.id);
    if (result) {
      ctx.returnBody(result, 100020);
    } else {
      ctx.returnBody(null, 100021, 200);
    }
  }

  // 统计
  async statistics() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].statistics(ctx.query);
    ctx.returnBody(result, 100010);
  }

}

module.exports = Controller;
