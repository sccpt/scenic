module.exports = app => {
  const { router, controller, io } = app;
  /**
   * 后台管理系统模块
  */
  // 特殊处理
  router.post(`/api/${app.config.public}/login`, controller[app.config.public].admin.system.common.login); // 登录
  router.post(`/api/${app.config.public}/logout`, controller[app.config.public].admin.system.common.logout); // 登出
  router.get(`/api/${app.config.public}/captcha`, controller[app.config.public].admin.system.common.captcha); // 验证码
  router.post(`/api/${app.config.public}/upload`, controller[app.config.public].admin.system.common.upload); // 上传
  router.get(`/api/${app.config.public}/admin/system/getInfo`, controller[app.config.public].admin.system.user.getInfo); // 获取用户信息
  router.put(`/api/${app.config.public}/admin/system/user/:id/resetPwd`, app.middleware.auth({
    put: 'system:user:resetPwd'
  }), controller[app.config.public].admin.system.common.resetPwd); // 重置密码
  router.put(`/api/${app.config.public}/admin/system/user/:id/updateUserImg`, app.middleware.auth({
    put: 'system:user:updateUserImg'
  }), controller[app.config.public].admin.system.common.updateUserImg); // 修改头像
  router.put(`/api/${app.config.public}/admin/system/user/:id/updateUserPwd`, app.middleware.auth({
    put: 'system:user:updateUserPwd'
  }), controller[app.config.public].admin.system.common.updateUserPwd); // 修改密码
  router.get(`/api/${app.config.public}/admin/system/showByType/:dictType`, controller[app.config.public].admin.system.dictData.showByType); // 字典查询
  router.get(`/api/${app.config.public}/admin/system/menu/userMenu`, controller[app.config.public].admin.system.menu.userMenu); // 用户菜单
  router.put(`/api/${app.config.public}/admin/system/role/changeRoleStatus`, app.middleware.auth({
    put: 'system:role:changeRoleStatus'
  }), controller[app.config.public].admin.system.role.changeRoleStatus); // 修改角色状态


  /**
   * 系统模块
   */
  router.get('seting', `/api/${app.config.public}/admin/system/seting`, app.middleware.auth({
    get: 'system:seting:list',
  }), controller[app.config.public].admin.system.seting.index); // 获取系统配置
  router.put('seting', `/api/${app.config.public}/admin/system/seting`, app.middleware.auth({
    put: 'system:seting:update',
  }), controller[app.config.public].admin.system.seting.update); // 修改系统配置
  router.resources('user', `/api/${app.config.public}/admin/system/user`, app.middleware.auth({
    get: 'system:user:list',
    post: 'system:user:add',
    put: 'system:user:update',
    delete: 'system:user:delete'
  }), controller[app.config.public].admin.system.user); // 用户路由
  router.resources('role', `/api/${app.config.public}/admin/system/role`, app.middleware.auth({
    get: 'system:role:list',
    post: 'system:role:add',
    put: 'system:role:update',
    delete: 'system:role:delete'
  }), controller[app.config.public].admin.system.role); // 角色路由
  router.resources('menu', `/api/${app.config.public}/admin/system/menu`, app.middleware.auth({
    get: 'system:menu:list',
    post: 'system:menu:add',
    put: 'system:menu:update',
    delete: 'system:menu:delete'
  }), controller[app.config.public].admin.system.menu); // 菜单路由
  router.resources('department', `/api/${app.config.public}/admin/system/department`, app.middleware.auth({
    get: 'system:department:list',
    post: 'system:department:add',
    put: 'system:department:update',
    delete: 'system:department:delete'
  }), controller[app.config.public].admin.system.department); // 部门路由
  router.resources('dictType', `/api/${app.config.public}/admin/system/dictType`, app.middleware.auth({
    get: 'system:dictType:list',
    post: 'system:dictType:add',
    put: 'system:dictType:update',
    delete: 'system:dictType:delete'
  }), controller[app.config.public].admin.system.dictType); // 字典类型路由
  router.resources('dictData', `/api/${app.config.public}/admin/system/dictData`, app.middleware.auth({
    get: 'system:dictData:list',
    post: 'system:dictData:add',
    put: 'system:dictData:update',
    delete: 'system:dictData:delete'
  }), controller[app.config.public].admin.system.dictData); // 字典数据路由
  router.resources('notice', `/api/${app.config.public}/admin/system/notice`, app.middleware.auth({
    get: 'system:notice:list',
    post: 'system:notice:add',
    put: 'system:notice:update',
    delete: 'system:notice:delete'
  }), controller[app.config.public].admin.system.notice); // 字典数据路由

  /**
   * 博客模块特殊处理
   * */
  router.get(`/api/${app.config.public}/admin/blog/articleType/getAllType`, app.middleware.auth({
    get: 'blog:articleType:getAllType'
  }), controller[app.config.public].admin.blog.articleType.getAllType); // 获取所有类型

  /**
   * 博客模块
   */
  router.resources('article', `/api/${app.config.public}/admin/blog/article`, app.middleware.auth({
    get: 'blog:article:list',
    post: 'blog:article:add',
    put: 'blog:article:update',
    delete: 'blog:article:delete'
  }), controller[app.config.public].admin.blog.article); // 文章路由
  router.resources('articleType', `/api/${app.config.public}/admin/blog/articleType`, app.middleware.auth({
    get: 'blog:articleType:list',
    post: 'blog:articleType:add',
    put: 'blog:articleType:update',
    delete: 'blog:articleType:delete'
  }), controller[app.config.public].admin.blog.articleType); // 文章类型路由

  // 门票内容管理
  router.resources('tickets', `/api/${app.config.public}/admin/tickets/list`, app.middleware.auth({
    get: 'tickets:tickets:list',
    post: 'tickets:tickets:add',
    put: 'tickets:tickets:update',
    delete: 'tickets:tickets:delete'
  }), controller[app.config.public].admin.tickets.tickets);

  // 门票分类
  router.resources('ticketsType', `/api/${app.config.public}/admin/tickets/type`, app.middleware.auth({
    get: 'tickets:ticketsType:list',
    post: 'tickets:ticketsType:add',
    put: 'tickets:ticketsType:update',
    delete: 'tickets:ticketsType:delete'
  }), controller[app.config.public].admin.tickets.type);

  // 门票订单
  router.resources('ticketsOrders', `/api/${app.config.public}/admin/tickets/orders`, app.middleware.auth({
    get: 'tickets:ticketsOrders:list',
    post: 'tickets:ticketsOrders:add',
    put: 'tickets:ticketsOrders:update',
    delete: 'tickets:ticketsOrders:delete'
  }), controller[app.config.public].admin.tickets.ticketsOrders);

  // 订单统计分析
  router.get('statistics', `/api/${app.config.public}/admin/order/statistics`, app.middleware.auth({
    get: 'tickets:orders:statistics',
  }), controller[app.config.public].admin.tickets.ticketsOrders.statistics);

  // 门票库存
  router.get(`/api/${app.config.public}/admin/tickets/stock`, app.middleware.auth({
    get: 'tickets:ticketsStock:stock'
  }), controller[app.config.public].admin.tickets.tickets.getStocks);

  // 今天明天后天库存情况
  router.get(`/api/${app.config.public}/admin/tickets/stock/count`, app.middleware.auth({
    get: 'tickets:ticketsTodayStock:stock'
  }), controller[app.config.public].admin.tickets.tickets.getTodayStocks);

  // 现场订票完成付款
  router.post(`/api/${app.config.public}/admin/tickets/pay`, app.middleware.auth({
    post: 'tickets:ticketsOrder:pay'
  }), controller[app.config.public].admin.tickets.ticketsOrders.webPay);

  // 验票
  router.post(`/api/${app.config.public}/admin/tickets/check`, app.middleware.auth({
    post: 'tickets:ticketsOrder:check'
  }), controller[app.config.public].admin.tickets.ticketsOrders.checkTicket);

  // 设备类别管理
  router.resources('devicesType', `/api/${app.config.public}/admin/devices/type`, app.middleware.auth({
    get: 'devices:devicesType:list',
    post: 'devices:devicesType:add',
    put: 'devices:devicesType:update',
    delete: 'devices:devicesType:delete'
  }), controller[app.config.public].admin.devices.devicesType);

  // 设备管理
  router.resources('devices', `/api/${app.config.public}/admin/devices/list`, app.middleware.auth({
    get: 'devices:devices:list',
    post: 'devices:devices:add',
    put: 'devices:devices:update',
    delete: 'devices:devices:delete'
  }), controller[app.config.public].admin.devices.devices);

  // 停车场管理
  router.resources('parkings', `/api/${app.config.public}/admin/parkings/list`, app.middleware.auth({
    get: 'parkings:parkings:list',
    post: 'parkings:parkings:add',
    put: 'parkings:parkings:update',
    delete: 'parkings:parkings:delete'
  }), controller[app.config.public].admin.parkings.parkings);

  // 停车场设备上报数据
  router.post(`/api/${app.config.public}/admin/parkings/push`, app.middleware.auth({
    post: 'parkings:parkings:push'
  }), controller[app.config.public].admin.parkings.parkings.changeFree);

  // socket.io
  io.of('/').route('notice', io.controller.notice.ping);
};
