// import { Context } from 'react';
import { Context } from "vm";

const Koa = require('koa')

const app = new Koa();

app.use((ctx : Context) => {
  ctx.body = 'Hello Koa';
});

app.listen(8080, ()=> {
  console.log('Server is listening to port 8080')
})