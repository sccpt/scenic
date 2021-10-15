'use strict';

const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { getDays } = require('../utils/tools');

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const TicketsStock = app.model.define('t_tickets_stocks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    time: {
      allowNull: false,
      type: DATE,
      primaryKey: true,
      comment: '时间'
    },
    stock: {
      allowNull: false,
      type: INTEGER,
      comment: '库存'
    },
  });

  TicketsStock.findStocks = async () => {
    const seting = await app.model.Seting.findOne({
      where: {
        id: 23,
      },
    });
    const now = moment().format('YYYY-MM-DD');
    const future = moment().add('days', seting.ticketsTime).format('YYYY-MM-DD');
    const data = [];
    const days = getDays(now, future);
    if (seting.ticketsLimit != 0) {
      const res = await TicketsStock.findAll({
        where: {
          time: {
            [Op.gte]: now,
            [Op.lte]: future,
          },
        },
        order: [['time', 'ASC']],
      });
      const timeFn = (time) => {
        for (let i = 0; i < res.length; i++) {
          if (time == res[i].time) {
            return res[i];
          }
          return;
        }
      };
      for (let i = 0; i < days.length; i++) {
        const timeStock = timeFn(days[i]);
        if (timeStock) {
          data.push({
            time: days[i],
            stock: timeStock.stock,
          });
        } else {
          data.push({
            time: days[i],
            stock: seting.ticketsLimit,
          });
        }
      }
    } else {
      for (let i = 0; i < days.length; i++) {
        data.push({
          time: days[i],
          stock: '无限制',
        });
      }
    }
    return data;
  };

  TicketsStock.findToday = async () => {
    const seting = await app.model.Seting.findOne({
      where: {
        id: 23,
      },
    });
    if (seting.ticketsLimit != 0) {
      const today = await TicketsStock.findOne({
        where: {
          time: moment().format("YYYY-MM-DD"),
        }
      });
      const tomorrow = await TicketsStock.findOne({
        where: {
          time: moment().subtract(-1, "days").format("YYYY-MM-DD"),
        }
      });
      const after = await TicketsStock.findOne({
        where: {
          time: moment().subtract(-2, "days").format("YYYY-MM-DD"),
        }
      });
      return {
        today: today && today.stock ? today.stock : seting.ticketsLimit,
        tomorrow: tomorrow && tomorrow.stock ? tomorrow.stock : seting.ticketsLimit,
        after: after && after.stock ? after.stock : seting.ticketsLimit,
      };
    }
    return {
      today: '无限制',
      tomorrow: '无限制',
      after: '无限制',
    };
  };

  return TicketsStock;
};
