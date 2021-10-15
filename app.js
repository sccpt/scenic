'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-15
 */

module.exports = app => {
  app.beforeStart(async () => {
    // 初始化延迟任务
    app.initDelayTask();

    // 创建订单过期自动取消任务
    app.registerTaskHandler('cancelOrder', async (id) => {
      // 创建事务
      const transaction = await app.model.transaction();
      try {
        const order = await app.model.TicketsOrders.findOne({
          where: { id },
          lock: transaction.LOCK.UPDATE,
        }, { transaction });
        if (order && order.status == 0 && order.pay_status == 0) {
          const query = {
            updatedAt: new Date(),
            updatedBy: 'admin',
            status: 3,
          };
          await app.model.TicketsOrders.update(query, { where: { id }, transaction });
          console.log(`过期自动取消订单: id=${id}`);
        }
        transaction.commit();
      } catch (error) {
        transaction.rollback();
      }
    });
  });
};
