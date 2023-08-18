export {};
const Router = require("koa-router");
const authControl = require("./auth.controller");
const authRouter = new Router();

authRouter.post("/createUser", authControl.createUser);
authRouter.get("/userlist", authControl.userlist);
authRouter.get("/userinfo", authControl.userinfo);
authRouter.post("/updateUser", authControl.updateUser);
authRouter.post("/deleteUser", authControl.deleteUser);
authRouter.post("/login", authControl.login);

module.exports = authRouter;
