import { Injectable } from '@nestjs/common';
import { User } from '@application/entities/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findById(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: raw,
    });
  }

  async save(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
