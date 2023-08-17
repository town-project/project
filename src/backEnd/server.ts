const Koa = require("koa");

const app = new Koa();

app.use((ctx: any) => {
  ctx.body = "Hello Town Team.";
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
