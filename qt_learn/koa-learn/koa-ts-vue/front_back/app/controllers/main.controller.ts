// 控制器是用class类来实现的，但不是任意一个class都能成为控制器
//将普通类改为控制器类
import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa'

@Controller
export class MainController {
  @Get('/')
  public async index(@Ctx ctx: Context) {
    console.log(ctx)
    ctx.body = 'hello get !'
  }

  @Post('/')
  public async index2(@Ctx ctx: Context) {
    console.log(ctx)
    ctx.body = 'hello post !'
  }
}