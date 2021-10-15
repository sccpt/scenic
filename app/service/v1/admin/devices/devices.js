'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

const BaseService = require("../../base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Devices'
  }

  async findList(query, order = [['createdAt', 'DESC']]) {
    const { app } = this;
    let obj = {
      where: {},
      order,
      include: [
        {
          model: app.model.DevicesType,
          as: 'type',
        },
        {
          model: app.model.Roles,
          as: 'roles',
        },
      ]
    }
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10
      query.offset = (query.offset - 1) * query.limit
      obj.limit = query.limit
      obj.offset = query.offset
    } else {
      query.limit = null
      query.offset = null
    }
    for (let key in query) {
      if (key !== 'limit' && key !== 'offset') {
        if (!query[key]) {
          query[key] = ''
        }
        obj.where[key] = {
          [Op.like]: '%' + query[key] + '%'
        }
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 新增
  async create(query) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      // 事务增操作
      let device = await this.ctx.model[this.modelName].create(query, {
        transaction
      });
      let roleIds = this.ctx.request.body['roleIds']
      let roleQuery = []
      for (let i = 0; i < roleIds.length; i++) {
        let obj = {}
        obj.roleId = roleIds[i]
        obj.deviceId = device.id
        roleQuery.push(obj)
      }

      // 事务批量增操作
      await this.ctx.model.DevicesRoles.bulkCreate(roleQuery, {
        transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      transaction.rollback();
      this.ctx.throw(500, '服务器错误')
    }
  }

  // 修改
  async update(query, id) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      // 事务增操作
      await this.ctx.model[this.modelName].update(query, {
        where: {
          id
        },
        transaction
      });
      await this.ctx.model.DevicesRoles.destroy({
        where: {
          deviceId: id
        },
        transaction
      })
      let roleIds = this.ctx.request.body['roleIds']
      let roleQuery = []
      for (let i = 0; i < roleIds.length; i++) {
        let obj = {}
        obj.roleId = roleIds[i]
        obj.deviceId = id
        roleQuery.push(obj)
      }

      // 事务批量增操作
      await this.ctx.model.DevicesRoles.bulkCreate(roleQuery, {
        transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      transaction.rollback();
      this.ctx.throw(500, '服务器错误')
    }
  }

  // 删除
  async destroy(ids) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      await this.ctx.model[this.modelName].destroy({
        where: {
          id: {
            [Op.or]: ids
          }
        },
        transaction
      });
      await this.ctx.model.DevicesRoles.destroy({
        where: {
          deviceId: {
            [Op.or]: ids
          }
        },
        transaction
      })
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      transaction.rollback();
      this.ctx.throw(500, '服务器错误')
    }
  }

  // 查询某条数据
  async findByPk(id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id
      },
      include: [{
        model: this.ctx.model['Roles'],
        as: 'roles'
      }]
    })
  }
}

module.exports = Service;
