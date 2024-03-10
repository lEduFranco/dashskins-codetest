import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/Replace';


export interface UserProps {
  id: string;
  name: string;
  age: number;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<UserProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set age(age: number) {
    this.props.age = age;
  }

  public get age(): number {
    return this.props.age;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set avatar(avatar: string) {
    this.props.avatar = avatar;
  }

  public get avatar(): string {
    return this.props.avatar;
  }
  
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
