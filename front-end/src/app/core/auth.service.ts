import { HttpClient } from '@angular/common/http';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';

@Injectable()
export class AuthService {

  currentUser: IUser | null;

  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  currentUser$ = this._currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`/user/login`, data).pipe(
      tap((user: IUser) =>
        this._currentUser.next(user))
    );
  }

  signup(data: any): Observable<any> {
    return this.http.post(`/user/signup`, data).pipe(
      tap((user: IUser) => this._currentUser.next(user))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`/user/logout`, {}).pipe(
      tap((user: IUser) => this._currentUser.next(null)),
      catchError(() => {
        this._currentUser.next(null);
        return [null];
      })
    )
  }

  authenticate(): Observable<any> {
    return this.http.get(`/user/verify`).pipe(
      tap((user: IUser) => this._currentUser.next(user)),
      catchError(() => {
        this._currentUser.next(null);
        return [null];
      })
    );
  }
}