import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  avatar: string
}
