import { IsString, IsNumber } from 'class-validator';
export class Weather {
  @IsNumber() readonly tem: number;
  @IsNumber() readonly tem_min: number;
  @IsNumber() readonly tem_max: number;
  @IsNumber() readonly pressure: number;
  @IsNumber() readonly humidity: number;
  @IsNumber() readonly winter: number;
  @IsString() readonly icon: string;
}
