import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/utility.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {
  cityName: string;
  routeId: number;

  constructor(
    private weatherService: WeatherService,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
  }

  searchHandler(formValue: { searchedCity: string }) {
    this.cityName = formValue.searchedCity;
    if (this.cityName) {
      this.weatherService
        .getCurrentWeather(this.cityName)
        .subscribe({
          next: (data) => {
            const { main, weather } = data;
            const [description] = weather;
            const { main: desc } = description;
            this.weatherService.routeId = data.id;
            this.weatherService.city = this.cityName;
            this.weatherService.description = desc;
            this.weatherService.temperature = main.temp.toFixed(0);

            this.weatherService.weatherConditionIconUrl = this.utilityService.weatherConditionHandler(desc);
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
            const { main, weather } = data;
            const [description] = weather;
            const { main: desc } = description;
            this.weatherService.routeId = data.id;
            this.weatherService.city = this.cityName;
            this.weatherService.description = desc;
            this.weatherService.temperature = main.temp.toFixed(0);

            this.weatherService.weatherConditionIconUrl = this.utilityService.weatherConditionHandler(desc);
          },
          error: (err) => {
            console.error(err);
          }
        })
    }
  }

}
