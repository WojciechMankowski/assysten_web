import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule {}

// TODO moduł użytkownik;
// TODO łączenie z bazą danych
// TODO dodawanie nowego użytkownika
// TODO pobieranie użytkownika po nazwie
