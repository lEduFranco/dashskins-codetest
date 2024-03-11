import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract find(): Promise<User[]>;
  abstract findById(userId: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<User>;
  abstract save(user: User): Promise<User>;
}
