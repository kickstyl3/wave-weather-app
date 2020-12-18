import { Component, OnInit, DoCheck } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-options',
  templateUrl: './weather-options.component.html',
  styleUrls: ['./weather-options.component.css']
})
export class WeatherOptionsComponent implements OnInit, DoCheck {
  routeId: number;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.routeId = this.weatherService.routeId;
  }

  ngDoCheck() {
    if (this.routeId !== this.weatherService.routeId) {
      this.routeId = this.weatherService.routeId;
    }
  }

}
