'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderIndex() {
    const { ctx, service } = this;
    const res = await service.page.news.findIndexData();
    await ctx.render('news/index.html', res);
  }

  async renderList() {
    const { ctx, service } = this;
    const query = {
      offset: ctx.helper.parseInt(ctx.query.page || 1),
      id: ctx.helper.parseInt(ctx.params.id),
    };
    const res = await service.page.news.findList(query);
    await ctx.render('news/list.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.news.findByPk(id);
    await ctx.render('news/details.html', res);
  }
}

module.exports = pageController;
