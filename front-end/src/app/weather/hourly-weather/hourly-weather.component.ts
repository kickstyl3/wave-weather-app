import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as moment from 'moment';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent implements OnInit {
  hourList;

  constructor(
    private utilityService: UtilityService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService
    .getHourlyWeather()
    .subscribe({
      next: (data) => {
        const hoursArr = data.list;
        
        this.hourList = hoursArr;
        console.log(this.hourList);
      }
    })
  }

  weatherConditionHandler(description) {
    const iconUrl = this.utilityService.weatherConditionHandler(description);

    return iconUrl;
  }

  formatHour(unixTime) {
    const hour = moment.unix(unixTime).format("HH");
    
    return hour;
  }

}
