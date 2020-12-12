import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(data: any): Observable<any> {
    const cityHeader = new HttpHeaders({ 'Current-City': data });

    return this.http.get('/city/current-weather', { headers: cityHeader }).pipe(
      tap((city) => console.log(city)),
      catchError(() => {
        return [null];
      })
    )
  }
}