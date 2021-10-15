'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderList() {
    const { ctx, service } = this;
    const query = {
      offset: ctx.helper.parseInt(ctx.query.page || 1),
      id: 25,
    };
    const res = await service.page.video.findList(query);
    await ctx.render('video/index.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.video.findByPk(id);
    await ctx.render('video/details.html', res);
  }
}

module.exports = pageController;
