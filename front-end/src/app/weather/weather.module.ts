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

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent,
    DetailsComponent
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
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent
  ]
})
export class WeatherModule { }
