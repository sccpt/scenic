'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const TicketsPeople = app.model.define('t_tickets_peoples', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '姓名'
    },
    idcard: {
      allowNull: false,
      type: STRING,
      comment: '身份证号'
    },
  });

  TicketsPeople.associate = function () {
    TicketsPeople.belongsToMany(app.model.TicketsOrders, {
      through: {
        model: app.model.TicketsMids,
        unique: false,
      },
      foreignKey: 'p_id',
      constraints: false
    });
  }

  return TicketsPeople;
};
