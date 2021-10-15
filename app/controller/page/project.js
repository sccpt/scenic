'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderList() {
    const { ctx, service } = this;
    const query = {
      offset: ctx.helper.parseInt(ctx.query.page || 1),
      id: 12,
    };
    const res = await service.page.project.findList(query);
    await ctx.render('project/index.html', res);
  }

  async renderDeatails() {
    const { ctx, service } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await service.page.project.findByPk(id);
    await ctx.render('project/details.html', res);
  }
}

module.exports = pageController;
