'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-14
 */
const BaseController = require("../../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'parkings'
    this.modleName = 'parkings'
  }
  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      name: ctx.query.name
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 停车场设备上报数据，进场
  async changeFree() {
    const { ctx, service } = this;
    const { parkingid, type } = ctx.request.header;
    if (!parkingid) {
      ctx.returnBody(null, 100031);
      return;
    }
    if (!type) {
      ctx.returnBody(null, 100031);
      return;
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].changeFree(parkingid, type);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031);
    }
  }

}

module.exports = Controller;
