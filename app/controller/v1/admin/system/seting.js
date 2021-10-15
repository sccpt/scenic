'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */
const BaseController = require('egg').Controller;


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'seting'
    this.modleName = 'system'
  }
  // 查询
  async index() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findSeting();
    ctx.returnBody(result, 100010);
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    let query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id: 23
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031);
    }
  }

}

module.exports = Controller;
