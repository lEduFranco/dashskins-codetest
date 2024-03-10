import { Module } from '@nestjs/common';
import { UsersRepository } from '@application/repositories/users-repository';
import { PrismaUsersRepository } from '@infra/database/prisma/repositories/prisma-users-repository';

import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [UsersRepository],
})
export class DatabaseModule {}
