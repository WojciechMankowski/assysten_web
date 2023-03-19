import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { Weather } from './weather';
import { WikipadiaData } from './wikipedia';
// eslint-disable-next-line prefer-const, @typescript-eslint/no-var-requires
let wiki = require('wikipedia');

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/weather/:city')
  async weather(@Param('city') city: string) {
    let data: Weather;
    const api_key = '599076ae1ed26c6c1cb2c6a3759db846';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=pl`;
    const api = await fetch(url);
    const data_json = await api.json();
    const data_weathers = {
      tem: data_json.main.temp,
      tem_min: data_json.main.temp_min,
      tem_max: data_json.main.temp_max,
      pressure: data_json.main.pressure,
      humidity: data_json.main.humidity,
      icon: data_json.weather[0].icon,
      winter: data_json.wind,
    };
    // eslint-disable-next-line prefer-const
    data = { ...data_weathers };
    return data;
  }

  @Get(':word')
  getUrl(@Param('word') word: string) {
    let url = '';
    if (word === 'kalendarz') {
      url = this.apiService.setCalendar();
    } else if (word === 'email') {
      url = this.apiService.setEmail();
    } else if (word === 'google') {
      url = this.apiService.setGoogle();
    }
    return { url: url };
  }

  @Get('/wikipedia/:word')
  async wiki(@Param('word') word: string) {
    const newUrl = await wiki.setLang('pl');
    const summary = await wiki.summary(word);
    const data: WikipadiaData = {
      title: summary.title,
      url: summary.content_urls.desktop.page,
      extract: summary.extract,
    };
    return data;
  }
}
