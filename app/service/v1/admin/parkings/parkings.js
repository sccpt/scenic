'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-14
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Parkings'
  }

  async changeFree(id, type) {
    return await this.ctx.model[this.modelName].changeFree(id, type);
  }
}

module.exports = Service;
