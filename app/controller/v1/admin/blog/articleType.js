'use strict';
/*
 * @Author: yurui
 * @Date: 2021-06-01
 */
// app/controller/users.js
const BaseController = require("../../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'articleType'
    this.modleName = 'blog'
  }
  // 查询
  async index() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      userId: ctx.state.user.id,
      title: ctx.query.title
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query, [['orderNum', 'ASC']]);
    ctx.returnBody(result, 100010);
  }

  async getAllType () {
    const {ctx, service} = this;
    const query = {};
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAll(query);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create')
    if (!validateResult) return

    const allTypes = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAll({
      userId: ctx.state.user.id
    });

    let query = ctx.request.body
    query.createdAt = new Date()
    query.createdBy = ctx.state.user.userName
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 200);
    }
  }

  // 修改
  async update() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update')
    if (!validateResult) return

    const allTypes = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAll({
      userId: ctx.state.user.id
    });

    let query = ctx.request.body
    query.updatedAt = new Date()
    query.updatedBy = ctx.state.user.userName
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 200);
    }
  }
}

module.exports = Controller;
