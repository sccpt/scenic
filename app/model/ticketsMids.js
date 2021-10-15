'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const TicketsMids = app.model.define('t_tickets_mids', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    order_id: {
      allowNull: false,
      type: INTEGER,
      comment: '订单id'
    },
    p_id: {
      allowNull: false,
      type: INTEGER,
      comment: '人员id'
    },
  });

  return TicketsMids;
};
