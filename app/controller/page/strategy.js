'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderIndex() {
    const { ctx, service } = this;
    const res = await service.page.strategy.findIndexData();
    await ctx.render('strategy/index.html', res);
  }

  async renderList() {
    const { ctx, service } = this;
    const query = {
      offset: ctx.helper.parseInt(ctx.query.page || 1),
      id: ctx.helper.parseInt(ctx.params.id),
    };
    const res = await service.page.strategy.findList(query);
    await ctx.render('strategy/list.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.strategy.findByPk(id);
    await ctx.render('strategy/details.html', res);
  }
}

module.exports = pageController;
