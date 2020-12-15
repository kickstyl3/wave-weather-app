import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';

const routes: Routes = [
    {
        path: 'weather',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'daily',
                component: DailyWeatherComponent,
                data: {
                    isLogged: true
                }
            },
            {
                path: 'hourly',
                component: HourlyWeatherComponent,
                data: {
                    isLogged: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }
