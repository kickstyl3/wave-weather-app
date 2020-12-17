import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit {
  dailyData;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    // setInterval(() => {
      this.weatherService
        .getDailyWeather()
        .subscribe({
          next: (data) => {
            data.daily.shift();
            const splicedData = data.daily.splice(6, 8);
            data.daily.shift();

            this.dailyData = data.daily;
            console.log(this.dailyData);
          },
          error: (err) => {
            console.error(err);
          }
        })
    // }, 5000)
  }

  formatDay(unixTime) {
    const day = moment.unix(unixTime).format("dddd");

    return day;
  }
  
}
