module.exports = app => {
  // 小程序接口
  const { router, controller } = app;
  const xmlparse = app.middleware.xmlparse();

  router.post("/weapp/login", controller.weapp.login.login);
  // 门票
  router.get("/weapp/tickets/list", controller.weapp.tickets.getList);
  router.get("/weapp/tickets/stock", controller.weapp.tickets.getStocks);
  // 订单
  router.post("/weapp/tickets/create", controller.weapp.tickets.create);
  router.post("/weapp/tickets/cancel", controller.weapp.tickets.cancel);
  router.get("/weapp/tickets/orders", controller.weapp.tickets.getOrder);
  router.get("/weapp/tickets/order/details/:id", controller.weapp.tickets.orderShow);
  // 支付
  router.post("/weapp/pay/unifiedorder", controller.weapp.pay.unifiedorder);
  app.post('/weapp/pay/callback', xmlparse, controller.weapp.pay.wechatNotify);
};
