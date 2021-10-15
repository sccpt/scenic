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
    this.typeName = 'strategy';
    this.typeId = 19;
  }

  async findIndexData() {
    const header = await this.findHeader(19);
    const xianlu = await this.findArticlesList(20, 5, 1);
    const eat = await this.findArticlesList(22, 3, 1);
    return {
      header,
      xianlu,
      eat,
    };
  }
}

module.exports = Service;
