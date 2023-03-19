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

  @Get('/:id')
  async find(@Param('id') id: number) {
    return this.usersService.find({ id: Number(id) });
  }

  @Post()
  addUser(@Body() userData: UserType): Promise<UserModel> {
    console.log(`userData: ${userData.username} ${userData.email}  ${userData.password}
    `);
    //   {
    //     "username":"Wojtek",
    //     "email":"wojtekm510@gmail.com",
    //     "password":"Wojtek"
    //  }'
    return this.usersService.create(userData);
  }
}
