import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
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
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
