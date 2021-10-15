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
    this.typeName = 'news';
    this.typeId = 13;
  }

  async findIndexData() {
    const header = await this.findHeader(13);
    const scenic = await this.findArticlesList(14, 4, 1);
    const hd = await this.findArticlesList(17, 5, 1);
    return {
      header,
      scenic,
      hd,
    };
  }
}

module.exports = Service;
