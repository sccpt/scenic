'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async renderIndex() {
    const { ctx, service } = this;
    const res = await service.page.home.getHomeData();
    await ctx.render('index.html', res);
  }
}

module.exports = HomeController;
