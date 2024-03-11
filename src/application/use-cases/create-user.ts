import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users-repository';
import { User } from '@application/entities/user';

interface CreateUserRequest {
  name: string;
  age: number;
  email: string;
  avatar: string;
}

interface CreateUserResponse {
  message: string
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {

    const { age, avatar, email, name } = request

    const user = new User({
      name,
      age, 
      avatar, 
      email
    })

    await this.usersRepository.create(user);

    return {
      message: 'User created'
    }
  }
}
