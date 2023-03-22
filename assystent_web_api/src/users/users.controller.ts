import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { UserType } from './user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('/:name')
  async find(@Param('name') name: string) {
    const user = await this.usersService.find(name);
    console.log(user);
    const data = user != null ? user : [];
    return data;
  }

  @Post()
  addUser(@Body() userData: UserType): Promise<UserModel> {
    return this.usersService.create(userData);
  }
}
