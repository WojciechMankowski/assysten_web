import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  users = [
    {
      id: 0,
      username: 'wojtek',
      email: 'wojtek@gmail.com',
      password: 'wojtek92',
    },
  ];
  findAll() {
    return this.users;
  }

  find(id: number) {
    const user = this.users.filter((user) => user.id == id);
    if (user.length === 0) throw new Error('No user found');
    return user;
  }

  create(newUser: User) {
    const id = this.users.length;
    this.users.push({ ...newUser, id });
  }
}
