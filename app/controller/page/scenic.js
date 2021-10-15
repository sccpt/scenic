'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderList() {
    const { ctx, service } = this;
    const query = {
      offset: ctx.helper.parseInt(ctx.query.page || 1),
      id: 11,
    };
    const res = await service.page.scenic.findList(query);
    await ctx.render('scenic/index.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.scenic.findByPk(id);
    await ctx.render('scenic/details.html', res);
  }
}

module.exports = pageController;
