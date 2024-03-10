// import { User as RawUser } from '@prisma/client';
import { User } from '@application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: any) {
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      email: user.email,
      avatar: user.avatar,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };
  }

  static toDomain(raw: any): User {
    return new User(
      {
        id: raw.id,
        name: raw.name,
        age: raw.age,
        email: raw.email,
        avatar: raw.avatar,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      raw.id,
    );
  }
}
