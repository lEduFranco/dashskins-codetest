import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { GetUser } from '@application/use-cases/get-user';

import { CreateUserBody } from '../dtos/create-user-body';
import { CreateUser } from '@application/use-cases/create-user';

@Controller('users')
export class UsersController {
  constructor(
    private getUser: GetUser,
    private createUser: CreateUser
  ) {}

  @Get('/:userId')
  async getUserId(@Param('userId') userId: string) {
    const { user } = await this.getUser.execute({ userId });

    return {
      user,
    };
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { message } = await this.createUser.execute(body);

    return {
      message,
    };
  }
}
