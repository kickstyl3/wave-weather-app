import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sunrise;
  sunset;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  clouds: number;
  wind: number;
  pressure: number;
  visibility: number;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService
      .getWeatherDetails()
      .subscribe({
        next: (data) => {
          const sunriseUnix = data.sys.sunrise;
          const sunsetUnix = data.sys.sunset;

          const sunriseTime = moment.unix(sunriseUnix).format("HH:mm");
          const sunsetTime = moment.unix(sunsetUnix).format("HH:mm");

          this.sunrise = sunriseTime;
          this.sunset = sunsetTime;

          this.feelsLike = data.main['feels_like'].toFixed(0);
          this.minTemp = data.main['temp_min'].toFixed(0);
          this.maxTemp = data.main['temp_max'].toFixed(0);
          this.humidity = data.main.humidity;
          this.clouds = data.clouds.all;
          this.wind = data.wind.speed;
          this.pressure = data.main.pressure;
          this.visibility = data.visibility;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}
