'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-29
 */

const BaseService = require("./base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.typeName = 'video';
    this.typeId = 25;
  }
}

module.exports = Service;
