import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-options',
  templateUrl: './weather-options.component.html',
  styleUrls: ['./weather-options.component.css']
})
export class WeatherOptionsComponent implements OnInit, DoCheck {
  routeId: number;
  isLogged$ = this.authService.isLogged$;

  constructor(
    private weatherService: WeatherService,
    private authService: AuthService
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
