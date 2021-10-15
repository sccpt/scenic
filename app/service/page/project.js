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
    this.typeName = 'project';
    this.typeId = 12;
  }
}

module.exports = Service;
