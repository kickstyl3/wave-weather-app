import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { authInterceptorProvider } from './auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AuthService,
    authInterceptorProvider,
    AuthGuard,
    WeatherService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent
  ]
})
export class CoreModule { }
