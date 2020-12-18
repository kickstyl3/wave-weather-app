import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { WeatherRoutingModule } from './weather.routing.module';
import { DetailsComponent } from './details/details.component';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { WeatherOptionsComponent } from './weather-options/weather-options.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent,
    DetailsComponent,
    WeatherNowComponent,
    WeatherOptionsComponent,
    SearchWeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherService
  ],
  exports: [
    CurrentWeatherComponent
  ]
})
export class WeatherModule { }
