'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */

const BaseService = require("../../base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Seting'
  }

  // 查询某条数据
  async findSeting() {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id: 23
      },
    })
  }

  // 修改
  async update(query, where) {
    return await this.ctx.model[this.modelName].update(query, {
      where
    });
  }

}

module.exports = Service;
