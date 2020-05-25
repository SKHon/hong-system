export default () => {
  return async function filter(ctx, next) {
    ctx.logger.warn('WARNNING!!!!');
    ctx.logger.info('some request data: %j', ctx.request.query);

    ctx.filter = true;
    return next();
  };
};
