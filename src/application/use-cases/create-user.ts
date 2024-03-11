import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@application/repositories/users-repository';
import { User } from '@application/entities/user';
import { UserAlreadyExists } from '@application/use-cases/errors/user-already-exists';

interface CreateUserRequest {
  name: string;
  age: number;
  email: string;
  avatar: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const { age, avatar, email, name } = request

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new UserAlreadyExists();
    }

    const createUser = new User({
      name,
      age, 
      avatar, 
      email
    })

    const user = await this.usersRepository.create(createUser);

    return {
      user
    }
  }
}
