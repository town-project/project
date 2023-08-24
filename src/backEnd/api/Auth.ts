export {};
const Router = require("koa-router");
const authControl = require("./auth.controller");
const authRouter = new Router();

authRouter.post("/registerUser", authControl.registerUser);
authRouter.get("/userlist", authControl.userlist);
authRouter.post("/userinfo", authControl.userinfo);
authRouter.post("/updateUser", authControl.updateUser);
authRouter.post("/deleteUser", authControl.deleteUser);
authRouter.post("/login", authControl.login);

module.exports = authRouter;
