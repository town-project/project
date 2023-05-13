const Koa = require('koa');
const app = new Koa();

//모드 요청을 처리하는 라우터
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

// http listen port 생성 서버 실행
app.listen(3000, () => console.log("Koa Server"))