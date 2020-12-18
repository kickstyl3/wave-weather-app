import { Component, OnInit, DoCheck } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.css']
})
export class WeatherNowComponent implements OnInit, DoCheck {
  city: string;
  description: string;
  temperature: number;
  weatherConditionIconUrl: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.city = this.weatherService.city;
      this.description = this.weatherService.description;
      this.temperature = this.weatherService.temperature;
      this.weatherConditionIconUrl = this.weatherService.weatherConditionIconUrl;
    }, 1000)
  }

  ngDoCheck() {
    if (this.city !== this.weatherService.city) {
      this.city = this.weatherService.city;
      this.description = this.weatherService.description;
      this.temperature = this.weatherService.temperature;
      this.weatherConditionIconUrl = this.weatherService.weatherConditionIconUrl;
    }
  }
}
