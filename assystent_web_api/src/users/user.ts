import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UserType {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly username: string;
  @IsString() readonly email: string;
  @IsString() readonly password: string;
}
