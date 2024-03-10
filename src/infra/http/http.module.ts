import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { UsersController } from './controllers/users.controllers';
import { GetUser } from '@application/use-cases/get-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    GetUser,
  ],
})
export class HttpModule {}
