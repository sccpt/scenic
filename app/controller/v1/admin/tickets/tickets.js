'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */
const BaseController = require("../../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'tickets'
    this.modleName = 'tickets'
  }
  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      type_id: ctx.query.type_id,
      name: ctx.query.name,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 获取库存情况
  async getStocks() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findStocks();
    ctx.returnBody(result, 100010);
  }

  // 获取今天明天后天剩余库存
  async getTodayStocks() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findTodayStocks();
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
