import { User } from '@application/entities/user';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users-repository';

interface GetUsersResponse {
  users: User[];
}

@Injectable()
export class GetUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetUsersResponse> {
    const users =
      await this.usersRepository.find();

    return {
      users,
    };
  }
}
