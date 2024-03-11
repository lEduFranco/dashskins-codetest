import { Injectable } from '@nestjs/common';
import { User } from '@application/entities/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async find(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map(PrismaUserMapper.toDomain);
  }

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

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async create(user: User): Promise<User> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: raw,
    });

    return PrismaUserMapper.toDomain(user);
  }

  async save(user: User): Promise<User> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: raw,
    });

    return PrismaUserMapper.toDomain(user);
  }
}
