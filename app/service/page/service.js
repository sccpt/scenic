'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-30
 */

const BaseService = require("./base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.typeName = 'service';
    this.typeId = 24;
  }

  async findIndexData() {
    const header = await this.findHeader(24);
    return {
      header,
    };
  }
}

module.exports = Service;
