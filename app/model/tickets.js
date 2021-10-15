'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Tickets = app.model.define('t_tickets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '门票名称'
    },
    type_id: {
      allowNull: false,
      type: STRING,
      comment: '门票类型'
    },
    price: {
      allowNull: false,
      type: INTEGER,
      comment: '门票价格	'
    },
    isTeam: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
      comment: '是否为团队票（0否，1是）'
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

  Tickets.associate = function () {
    app.model.Tickets.belongsTo(app.model.TicketsType, { foreignKey: 'type_id', targetKey: 'id', as: 'type' });
  }

  return Tickets;
};
