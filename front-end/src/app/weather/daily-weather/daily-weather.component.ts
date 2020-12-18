import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as moment from 'moment';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit {
  dailyData: [];
  description: string;

  constructor(
    private utilityService: UtilityService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService
      .getDailyWeather()
      .subscribe({
        next: (data) => {
          data.daily.shift();
          const splicedData = data.daily.splice(5, 8);

          this.dailyData = data.daily;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  weatherConditionHandler(description) {
    const iconUrl = this.utilityService.weatherConditionHandler(description);

    return iconUrl;
  }

  formatDay(unixTime) {
    const day = moment.unix(unixTime).format("dddd");

    return day;
  }

}
