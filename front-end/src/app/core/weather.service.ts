import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(data: any): Observable<any> {
    return this.http.get('/city/current-weather').pipe(
      tap((city) => console.log(city))
    )
  }
}