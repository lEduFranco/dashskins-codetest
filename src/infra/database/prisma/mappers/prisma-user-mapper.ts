import { User as RawUser } from '@prisma/client';
import { User } from '@application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: RawUser) {
    return {
      name: user.name,
      age: user.age,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        name: raw.name,
        age: raw.age,
        email: raw.email,
        avatar: raw.avatar,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    );
  }
}
