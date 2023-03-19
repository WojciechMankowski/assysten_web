import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { ApiController } from './api/api.controller';
import { UsersController } from './users/users.controller';
import { ApiService } from './api/api.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [ApiController, UsersController],
  providers: [AppService, UsersService, ApiService, PrismaService],
})
export class AppModule {}
