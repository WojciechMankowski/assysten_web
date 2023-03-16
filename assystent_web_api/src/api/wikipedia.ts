import { IsString } from 'class-validator';
export class WikipadiaData {
  @IsString() readonly title: string;
  @IsString() readonly url: string;
  @IsString() readonly extract: string;
}
