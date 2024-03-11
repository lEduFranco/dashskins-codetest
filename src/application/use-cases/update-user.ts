import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@application/repositories/users-repository';
import { User } from '@application/entities/user';
import { UserDoesNotExists } from '@application/use-cases/errors/user-does-not-exists';

interface UpdateUserRequest {
  userId: string;
  name: string;
  age: number;
  email: string;
  avatar: string;
}

interface UpdateUserResponse {
  user: User;
}

@Injectable()
export class UpdateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const { age, avatar, email, name, userId } = request

    const userAlreadyExists = await this.usersRepository.findById(userId);

    if (!userAlreadyExists) {
      throw new UserDoesNotExists();
    }
   
    const updateUser = new User({
      ...userAlreadyExists,
      name,
      age, 
      avatar,
      email
    })

    const user = await this.usersRepository.save(updateUser);

    return {
      user
    }
  }
}
