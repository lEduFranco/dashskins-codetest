import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { UsersController } from './controllers/users.controllers';
import { GetUser } from '@application/use-cases/get-user';
import { CreateUser } from '@application/use-cases/create-user';
import { GetUsers } from '@application/use-cases/get-users';
import { UpdateUser } from '@application/use-cases/update-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    GetUsers,
    GetUser,
    CreateUser,
    UpdateUser,
  ],
})

export class HttpModule {}
