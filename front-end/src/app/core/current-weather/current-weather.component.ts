import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  description: string;
  temperature: number;
  city: string;
  

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Paphos')
      .subscribe({
        next: (data) => {
          const { main, name, sys, visibility, weather, wind } = data;
          console.log(main, name, sys, visibility, weather, wind);
          const [description] = weather;
          const { main: desc } = description;
          this.description = desc;
          this.temperature = main.temp.toFixed(0);
          this.city = name;
          console.log(this.description);
          console.log(this.temperature);
          console.log(name);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}
