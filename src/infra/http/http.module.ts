import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { UsersController } from './controllers/users.controllers';
import { GetUser } from '@application/use-cases/get-user';
import { CreateUser } from '@application/use-cases/create-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    GetUser,
    CreateUser
  ],
})
export class HttpModule {}
