import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { UtilityService } from '../../shared/utility.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  cityName: string;
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

  // followCity() {
  // }
}

