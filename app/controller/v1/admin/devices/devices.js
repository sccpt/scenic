'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */
const BaseController = require("../../base");
const { createPassword } = require('../../../../utils/tools');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'devices'
    this.modleName = 'devices'
  }
  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      name: ctx.query.name,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create')
    if (!validateResult) return;
    let query = ctx.request.body;
    query.createdAt = new Date();
    query.createdBy = ctx.state.user.userName;
    query.secret = createPassword(8);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021);
    }
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update')
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    const id = ctx.helper.parseInt(ctx.params.id)
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, id);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031);
    }
  }
}

module.exports = Controller;
