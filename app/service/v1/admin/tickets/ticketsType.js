'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'TicketsType'
  }
}

module.exports = Service;
