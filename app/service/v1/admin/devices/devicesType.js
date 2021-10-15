'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'DevicesType'
  }
}

module.exports = Service;
