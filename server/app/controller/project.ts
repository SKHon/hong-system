import { Controller } from 'egg';

export default class ProjectController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.getProject();
  }
}
