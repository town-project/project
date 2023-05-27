const Koa = require('koa');
const app = new Koa();
const UserInfo = require('./Schema')
const fs = require('fs')
require('dotenv').config();

app.use(ctx => {
  ctx.body = 'Hello.';
});

const port = process.env.PORT
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI).then(
  (response) => {
    console.log('Successfully connected to mongodb')
  }
).catch(e=> {
  console.error(e);
})


app.listen(port, () => console.log("Downtown Server is Started."))