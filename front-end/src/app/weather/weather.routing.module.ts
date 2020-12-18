import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { DetailsComponent } from './details/details.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';

const routes: Routes = [
    {
        path: 'weather',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'details/:id',
                component: DetailsComponent,
                data: {
                    // isLogged: true
                }
            },
            {
                path: 'daily/:id',
                component: DailyWeatherComponent,
                data: {
                    // isLogged: true
                }
            },
            {
                path: 'hourly/:id',
                component: HourlyWeatherComponent,
                data: {
                    // isLogged: true
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
