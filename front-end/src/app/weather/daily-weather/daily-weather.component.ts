import { Component, OnInit, DoCheck } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit, DoCheck {
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
            const splicedData = data.daily.splice(4, 7);

            this.dailyData = data.daily;
            console.log(this.dailyData);
          },
          error: (err) => {
            console.error(err);
          }
        })
    // }, 5000)
  }

  ngDoCheck(): void {

  }
}
