'use strict';
const Controller = require('egg').Controller;

class pageController extends Controller {
  async renderIndex() {
    const { ctx, service } = this;
    await ctx.render('ticket/index.html');
  }

}

module.exports = pageController;
