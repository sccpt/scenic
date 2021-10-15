'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const TicketsType = app.model.define('t_tickets_types', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '类型名称'
    },
    status: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '状态（1显示，0不显示）'
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

  return TicketsType;
};
