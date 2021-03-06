const router = require('koa-router')();
const userService = require('../service/user_service');

router.prefix('/users');

router.get('/list', async function (ctx, next) {
    ctx.body = await userService.findAllUser();
});

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
});

module.exports = router;
