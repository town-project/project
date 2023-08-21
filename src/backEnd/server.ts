import { connect } from "./mongoConnect";

export {};

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const authRouter = require("./api/Auth");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = new Koa();
const router = new Router();
const PORT = 8000;

app.use(bodyParser());

router.get("/", async (ctx: any) => {
  ctx.body = "Hello Town Team 😁";
});

connect();

app.use(router.routes());

router.use("/auth", authRouter.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});

module.exports = {};
