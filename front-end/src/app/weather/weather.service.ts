import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  dailyWeatherCity$: string;

  constructor(private http: HttpClient) { }

  getCurrentWeather(data: any): Observable<any> {
    const cityHeader = new HttpHeaders({ 'Current-City': data });
    this.dailyWeatherCity$ = data;

    return this.http.get('/city/current-weather', { headers: cityHeader }).pipe(
      tap((city) => console.log(city)),
      catchError(() => {
        return [null];
      })
    )
  }

  getDailyWeather(): Observable<any> {
    const data = this.dailyWeatherCity$;
    const cityHeader = new HttpHeaders({ 'Current-City': data });
    console.log('data', data);

    return this.http.get('/city/daily-weather', { headers: cityHeader }).pipe(
      tap((city) => console.log('daily', city)),
      catchError(() => {
        return [null];
      })
    )
  }
}