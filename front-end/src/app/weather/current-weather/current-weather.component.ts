import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { UtilityService } from '../../shared/utility.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  city: string;
  description: string;
  temperature: number;
  cityName: string;
  weatherConditionIconUrl: string;
  routeId: number;

  constructor(
    private utilityService: UtilityService,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.cityName = 'London';

    this.weatherService
      .getCurrentWeather(this.cityName)
      .subscribe({
        next: (data) => {
          const { main, weather } = data;
          const [description] = weather;
          const { main: desc } = description;
          this.routeId = data.id;
          this.description = desc;
          this.temperature = main.temp.toFixed(0);
          this.city = this.cityName;

          this.weatherConditionIconUrl = this.utilityService.weatherConditionHandler(this.description);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  followCity() {
  }

  searchHandler(formValue: { searchedCity: string }) {
    this.cityName = formValue.searchedCity;
    if (this.cityName) {
      this.weatherService
        .getCurrentWeather(this.cityName)
        .subscribe({
          next: (data) => {
            const { main, name, sys, visibility, weather, wind } = data;
            const [description] = weather;
            const { main: desc } = description;
            this.description = desc;
            this.temperature = main.temp.toFixed(0);
            this.city = this.cityName;

            this.weatherConditionIconUrl = this.utilityService.weatherConditionHandler(this.description);
          },
          error: (err) => {
            console.error(err);
          }
        })
    } else {
      this.cityName = 'London';

      this.weatherService
        .getCurrentWeather(this.cityName)
        .subscribe({
          next: (data) => {
            const { main, name, sys, visibility, weather, wind } = data;
            const [description] = weather;
            const { main: desc } = description;
            this.description = desc;
            this.temperature = main.temp.toFixed(0);
            this.city = this.cityName;

            this.weatherConditionIconUrl = this.utilityService.weatherConditionHandler(this.description);
          },
          error: (err) => {
            console.error(err);
          }
        })
    }
  }
}

