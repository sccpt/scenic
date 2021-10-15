'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const DevicesType = app.model.define('device_types', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '名称'
    },
    remark: {
      allowNull: true,
      type: STRING,
      comment: '备注'
    },
    createdAt: {
      allowNull: true,
      type: DATE,
      comment: '创建时间'
    },
    createdBy: {
      allowNull: true,
      type: STRING,
      comment: '创建者'
    },
    updatedAt: {
      allowNull: true,
      type: DATE,
      comment: '更新时间'
    },
    updatedBy: {
      allowNull: true,
      type: STRING,
      comment: '更新者'
    }
  });

  return DevicesType;
};
