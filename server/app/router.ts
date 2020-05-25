import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  const filter = app.middleware.filter();
  router.get('/api/get', filter, controller.home.index);
  router.get('/', filter, controller.project.index);
};
