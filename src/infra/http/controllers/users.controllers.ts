import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { GetUser } from '@application/use-cases/get-user';

import { CreateUserBody } from '@infra/http/dtos/create-user-body';
import { CreateUser } from '@application/use-cases/create-user';
import { GetUsers } from '@application/use-cases/get-users';
import { UpdateUser } from '@application/use-cases/update-user';
import { UpdateUserBody } from '@infra/http/dtos/update-user-body';

@Controller('users')
export class UsersController {
  constructor(
    private getUsers: GetUsers,
    private getUser: GetUser,
    private createUser: CreateUser,
    private updateUser: UpdateUser
  ) {}

  @Get()
  async index() {
    const { users } = await this.getUsers.execute();

    return {
      users,
    };
  }

  @Get('/:userId')
  async getUserId(@Param('userId') userId: string) {
    const { user } = await this.getUser.execute({ userId });

    return {
      user,
    };
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { user } = await this.createUser.execute(body);

    return {
      user,
    };
  }

  @Put('/:userId')
  async update(@Param('userId') userId: string, @Body() body: UpdateUserBody) {
    const { user } = await this.updateUser.execute({ userId, ...body });

    return {
      user,
    };
  }
}
