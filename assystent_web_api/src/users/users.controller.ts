import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    return this.usersService.find(id);
  }

  @Post('addUser/:user')
  addUser(@Body() user: User) {
    return this.usersService.create(user);
  }
}
