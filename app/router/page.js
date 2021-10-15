module.exports = app => {
  const { router, controller } = app;

  // 首页
  router.get("/", controller.page.home.renderIndex);

  // 其它页面
  router.get("/scenic", controller.page.scenic.renderList);
  router.get("/scenic/details/:id.html", controller.page.scenic.renderDeatails);
  router.get("/project", controller.page.project.renderList);
  router.get("/project/details/:id.html", controller.page.project.renderDeatails);
  router.get("/news", controller.page.news.renderIndex);
  router.get("/news/:id.html", controller.page.news.renderList);
  router.get("/news/details/:id.html", controller.page.news.renderDeatails);
  router.get("/service", controller.page.service.renderList);
  router.get("/service/details/:id.html", controller.page.service.renderDeatails);
  router.get("/video", controller.page.video.renderList);
  router.get("/video/details/:id.html", controller.page.video.renderDeatails);
  router.get("/strategy", controller.page.strategy.renderIndex);
  router.get("/strategy/:id.html", controller.page.strategy.renderList);
  router.get("/strategy/details/:id.html", controller.page.strategy.renderDeatails);
  router.get("/ticket/qrcode", controller.page.ticket.renderIndex);
}
