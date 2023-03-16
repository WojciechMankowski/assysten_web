import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  url = '';
  weather_data = {};
  setCalendar() {
    return (this.url = 'https://calendar.google.com/');
  }
  setEmail() {
    return (this.url = 'https://mail.google.com/');
  }
  setGoogle() {
    return (this.url = 'https://www.google.com/');
  }
  getWeather(city: string) {
    const api_key = '599076ae1ed26c6c1cb2c6a3759db846';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=pl`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => (this.weather_data = { ...res }));
    return this.weather_data;
  }
}
