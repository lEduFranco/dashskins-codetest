import { User } from '@application/entities/user';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users-repository';

interface GetUserRequest {
  userId: string;
}

interface GetUserResponse {
  user: User | null;
}

@Injectable()
export class GetUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: GetUserRequest,
  ): Promise<GetUserResponse> {
    const { userId } = request;

    const user =
      await this.usersRepository.findById(userId);

    return {
      user,
    };
  }
}
