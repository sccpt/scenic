'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-18
 */

const moment = require('moment');
const { orderId } = require('../utils/tools');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const TicketsOrders = app.model.define('t_tickets_orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    tid: {
      allowNull: false,
      type: INTEGER,
      comment: '门票id'
    },
    uid: {
      allowNull: false,
      type: STRING,
      comment: '操作员'
    },
    time: {
      allowNull: false,
      type: DATE,
      comment: '入园时间'
    },
    num: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '购票数量'
    },
    from_type: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '来源分类（1散客，2携程，3飞猪，4美团，5去哪儿，6同程，7旅行社，8其它）'
    },
    order_id: {
      allowNull: false,
      type: STRING,
      comment: '订单ID'
    },
    price: {
      allowNull: false,
      type: INTEGER,
      comment: '订单总金额'
    },
    people: {
      allowNull: false,
      type: STRING,
      comment: '预定人'
    },
    mobile: {
      allowNull: false,
      type: STRING,
      comment: '预订人手机号码'
    },
    status: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
      comment: '订单状态（0待付款，1未出行，2已完成，3取消订单）'
    },
    pay_type: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '支付方式（1在线支付，2现场购票）'
    },
    pay_status: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
      comment: '支付状态，0未支付，1已支付'
    },
    pay_id: {
      allowNull: true,
      type: STRING,
      comment: '微信支付订单号，退款使用'
    },
    pay_money: {
      allowNull: true,
      type: INTEGER,
      comment: '微信支付总金额，用于退款'
    },
    pay_time: {
      allowNull: true,
      type: DATE,
      comment: '支付时间'
    },
    refund_status: {
      allowNull: true,
      type: INTEGER,
      defaultValue: 0,
      comment: '退款状态，0已退款，1未退款'
    },
    check_time: {
      allowNull: true,
      type: DATE,
      comment: '验票时间'
    },
    check_status: {
      allowNull: true,
      type: INTEGER,
      defaultValue: 0,
      comment: '验票状态，0未，1已'
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

  TicketsOrders.associate = function () {
    TicketsOrders.belongsToMany(app.model.TicketsPeople, {
      through: {
        model: app.model.TicketsMids,
        unique: false,
      },
      as: 'peoples',
      foreignKey: 'order_id',
      constraints: false
    });
    TicketsOrders.belongsTo(app.model.Tickets, { foreignKey: 'tid', targetKey: 'id', as: 'tickets' });
    TicketsOrders.belongsTo(app.model.Users, { foreignKey: 'uid', targetKey: 'id', as: 'user' });
  }

  // 后台修改订单,未完成
  TicketsOrders.webUpdate = async (query, { where }) => {
    const transaction = await app.model.transaction();
    try {
      const res = await TicketsOrders.findOne({
        where,
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      const seting = await app.model.Seting.findOne({
        where: {
          id: 23,
        },
      });
      const stocks = await app.model.TicketsStock.findOne({
        where: {
          time: query.time,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      // 只改了购票数量，没改入园时间
      if (res.time == query.time && res.num != query.num) {
        const buyNum = query.num - res.num;
        if (buyNum > 0) {
          if (buyNum > stocks.stock) {
            transaction.commit();
            return;
          }
          await app.model.TicketsStock.update({ stock: stocks.stock - buyNum }, { where: { id: stocks.id }, transaction });
        } else {
          await app.model.TicketsStock.update({ stock: stocks.stock + Math.abs(buyNum) }, { where: { id: stocks.id }, transaction });
        }
      }
      // 改了入园时间
      if (res.time != query.time) {
        if ((stocks && stocks.stock == 0) || (stocks && stocks.stock && stocks.stock < query.num)) {
          transaction.commit();
          return;
        }
        if (stocks && stocks.stock && stocks.stock >= query.num) {
          await app.model.TicketsStock.update({ stock: stocks.stock - query.num }, { where: { id: stocks.id }, transaction });
        } else {
          await app.model.TicketsStock.create({
            time: query.time,
            stock: seting.ticketsLimit - query.num,
          }, { transaction });
        }

      }

    } catch (error) {
      transaction.rollback();
    }
  };

  // 后台删除订单
  TicketsOrders.webDelete = async (id) => {
    const transaction = await app.model.transaction();
    try {
      const res = await TicketsOrders.findOne({
        where: {
          id,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      const stocks = await app.model.TicketsStock.findOne({
        where: {
          time: res.time,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      // 查找中间表,删除相关数据
      const mRes = await app.model.TicketsMids.findAll({
        where: {
          order_id: id,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      const pIds = [];
      const mIds = [];
      for (let i = 0; i < mRes.length; i++) {
        mIds.push(mRes[i].id);
        pIds.push(mRes[i].p_id);
      }
      await app.model.TicketsPeople.destroy({ where: { id: { [Op.or]: pIds } }, transaction });
      await app.model.TicketsMids.destroy({ where: { id: { [Op.or]: mIds } }, transaction });
      const days = moment(res.time).diff(moment().format('YYYY-MM-DD'), 'day');
      if (stocks && days >= 0) {
        await app.model.TicketsStock.update({ stock: stocks.stock + res.num }, { where: { id: stocks.id }, transaction });
      }
      const uRes = await TicketsOrders.destroy({ where: { id }, transaction });
      await transaction.commit();
      return uRes;
    } catch (error) {
      transaction.rollback();
    }
  };

  // 后台完成付款
  TicketsOrders.webPay = async (id) => {
    const transaction = await app.model.transaction();
    try {
      const res = await TicketsOrders.findOne({
        where: {
          id,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      if (res.status === 0) {
        await TicketsOrders.update({ status: 1, pay_status: 1, pay_money: res.price, pay_time: new Date() }, { where: { id }, transaction });
        await transaction.commit();
        return res;
      }
      transaction.commit();
      return;
    } catch (error) {
      transaction.rollback();
    }
  };

  // 下订单
  TicketsOrders.weappCreate = async (query) => {
    const transaction = await app.model.transaction();
    try {
      // 校验购票时间有没有超出限制
      const seting = await app.model.Seting.findOne({
        where: {
          id: 23,
        },
      });
      if (seting.ticketsStatus) {
        const days = moment(query.time).diff(moment().format('YYYY-MM-DD'), 'day');
        if (days < 0 || days >= seting.ticketsTime) {
          transaction.commit();
          return;
        }
        // 校验购票数量和出行人员数是否相等
        if (query.num !== query.peoples.length) {
          transaction.commit();
          return;
        }
        // 校验购票数量
        if (seting.ticketsLimit != 0) {
          if (query.num > seting.ticketsLimit) {
            transaction.commit();
            return;
          }
          const stocks = await app.model.TicketsStock.findOne({
            where: {
              time: query.time,
            },
            lock: transaction.LOCK.UPDATE,
          }, { transaction });
          if ((stocks && stocks.stock == 0) || (stocks && stocks.stock && stocks.stock < query.num)) {
            transaction.commit();
            return;
          }
          // 对库存进行对应操作
          if (stocks && stocks.stock && stocks.stock >= query.num) {
            await app.model.TicketsStock.update({ stock: stocks.stock - query.num }, { where: { id: stocks.id }, transaction });
          } else {
            await app.model.TicketsStock.create({
              time: query.time,
              stock: seting.ticketsLimit - query.num,
            }, { transaction });
          }
        }
        // 开始下单操作
        query.order_id = orderId();
        query.price = query.tickets.price * query.num;
        query.tid = query.tickets.id;
        const parmas = { ...query };
        delete parmas.tickets;
        delete parmas.peoples;
        delete parmas.id;
        const res = await TicketsOrders.create(parmas, { transaction });
        // 存入出行人员信息
        const pRes = await app.model.TicketsPeople.bulkCreate(query.peoples, { transaction });
        const mids = [];
        for (let j = 0; j < pRes.length; j++) {
          mids.push({
            order_id: res.id,
            p_id: pRes[j].id,
          });
        }
        const mRes = await app.model.TicketsMids.bulkCreate(mids, { transaction });
        if (mRes.length === query.peoples.length) {
          await transaction.commit();
          return {
            id: res.id,
            time: res.time,
            num: res.num,
            order_id: res.order_id,
            tickets: query.tickets,
            price: res.price,
            people: res.people,
            mobile: res.mobile,
            peoples: query.peoples,
          }
        } else {
          transaction.rollback();
          return;
        }
      }
      transaction.commit();
      return;
    } catch (error) {
      transaction.rollback();
    }
  };

  // 小程序取消订单
  TicketsOrders.weappCancel = async (query) => {
    const transaction = await app.model.transaction();
    try {
      // 找到订单并锁定
      const res = await TicketsOrders.findOne({
        where: {
          id: query.id,
          uid: query.uid,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      // 校验时间
      const nowTime = moment().format('YYYYMMDD');
      const cxTime = moment(res.time).format('YYYYMMDD');
      if (cxTime <= nowTime) {
        transaction.commit();
        return;
      }
      // 校验订单状态
      if (res.status == 2 || res.status == 3) {
        transaction.commit();
        return;
      }
      const sRes = await app.model.TicketsStock.findOne({
        where: {
          time: res.time,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      if (sRes) {
        await app.model.TicketsStock.update({ stock: sRes.stock + res.num }, { where: { id: sRes.id }, transaction });
      }
      const tRes = await TicketsOrders.update({ status: 3 }, { where: { id: query.id }, transaction });
      transaction.commit();
      return tRes;
      // 下面去调用退款申请
    } catch (error) {
      transaction.rollback();
    }
  };

  // 验票并完成订单
  TicketsOrders.checkTicket = async (id) => {
    const transaction = await app.model.transaction();
    try {
      const res = await TicketsOrders.findOne({
        where: {
          id,
        },
        include: [
          {
            model: app.model.TicketsPeople,
            as: 'peoples',
            through: { attributes: [] },
            required: false
          },
        ],
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      const now = moment().format('YYYY-MM-DD');
      const time = moment(res.time).format('YYYY-MM-DD');
      if (res && res.status === 1 && res.pay_status === 1 && now === time) {
        await TicketsOrders.update({ status: 2, check_time: new Date(), check_status: 1 }, { where: { id }, transaction });
        await transaction.commit();
        return res;
      }
      if (res && res.status === 2 && res.pay_status === 1 && now === time) {
        await transaction.commit();
        return res;
      }
      transaction.commit();
      return;
    } catch (error) {
      transaction.rollback();
    }
  };

  return TicketsOrders;
};
