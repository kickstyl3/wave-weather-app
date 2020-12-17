import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as moment from 'moment';

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

  constructor(
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
          this.description = desc;
          this.temperature = main.temp.toFixed(0);
          this.city = this.cityName;

          this.weatherConditionHandler(this.description);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }


  searchHandler(formValue: { searchedCity: string }) {
    this.cityName = formValue.searchedCity;
    if (this.cityName) {
      this.weatherService
        .getCurrentWeather(this.cityName)
        .subscribe({
          next: (data) => {
            const { main, name, sys, visibility, weather, wind } = data;
            // console.log(main, name, sys, visibility, weather, wind);
            const [description] = weather;
            const { main: desc } = description;
            this.description = desc;
            this.temperature = main.temp.toFixed(0);
            this.city = this.cityName;

            this.weatherConditionHandler(this.description);
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
            // console.log(main, name, sys, visibility, weather, wind);
            const [description] = weather;
            const { main: desc } = description;
            this.description = desc;
            this.temperature = main.temp.toFixed(0);
            this.city = this.cityName;

            this.weatherConditionHandler(this.description);
          },
          error: (err) => {
            console.error(err);
          }
        })
    }
  }

  followCity() {
    const city = this.city;


  }

  weatherConditionHandler(description) {
    const dateNow = new Date();
    const timeNow = +moment(dateNow).format("k");

    if (description === 'Clear' && timeNow <= 17) {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += 'clear-sun.svg';
    } else if (description === 'Clear' && timeNow >= 17) {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += 'clear-moon.svg';
    } else if (description === 'Rain') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Snow') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Clouds') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Thunderstorm') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    }
  }
}

