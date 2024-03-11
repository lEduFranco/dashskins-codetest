import { IsEmail, IsString, IsNumber } from 'class-validator';

export class UpdateUserBody {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  avatar: string
}
