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
  }

  async getHomeData() {
    const header = await this.findHeader(0);
    const scenic = await this.findArticlesList(11, 6, 1);
    const project = await this.findArticlesList(12, 5, 1);
    const slider = await this.findArticlesList(14, 5, 1);
    const news = await this.findArticlesList(14, 5);
    return {
      header,
      scenic,
      project,
      slider,
      news,
    };
  }
}

module.exports = Service;
