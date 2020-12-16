import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sunrise: number;
  sunset: number;
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
          this.sunrise = data.sys.sunrise;
          this.sunset = data.sys.sunset;
          this.feelsLike = data.main['feels_like'];
          this.minTemp = data.main['temp_min'];
          this.maxTemp = data.main['temp_max'];
          this.humidity = data.main.humidity;
          this.clouds = data.clouds.all;
          this.wind = data.wind.speed;
          this.pressure = data.main.pressure;
          this.visibility = data.visibility;
          const details = {
            sunrise: this.sunrise,
            sunset: this.sunset,
            feelsLike: this.feelsLike,
            minTemp: this.minTemp,
            maxTemp: this.maxTemp,
            humidity: this.humidity,
            clouds: this.clouds,
            wind: this.wind,
            pressure: this.pressure,
            visibility: this.visibility
          };
          console.log('details', details);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

}
