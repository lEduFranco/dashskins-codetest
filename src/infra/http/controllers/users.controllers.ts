import { Controller, Get, Param, } from '@nestjs/common';

import { GetUser } from '@application/use-cases/get-user';

@Controller('users')
export class UsersController {
  constructor(
    private getUser: GetUser,
  ) {}

  @Get('/:userId')
  async getFromUsers(@Param('userId') userId: string) {
    const { user } = await this.getUser.execute({ userId });

    return {
      user,
    };
  }
}
