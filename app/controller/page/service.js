'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderList() {
    const { ctx, service } = this;
    const res = await service.page.service.findIndexData();
    await ctx.render('service/index.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.service.findByPk(id);
    await ctx.render('service/details.html', res);
  }
}

module.exports = pageController;
