import { NgSnotifyService } from 'src/app/core/service/ng-snotify.service';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { filter, map, skipWhile, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LocalStorageConstants } from '../helpers/enums/local-storage.enum';
import { TokenRequest } from '../helpers/params/token-request.param';
import { UserForLoginParam } from '../helpers/params/user-for-login.param';
import { UserForLogged, Users } from '../model/users.model';
import {
  CaptionConstants,
  MessageConstants,
} from '../helpers/enums/message.enum';
import { Router } from '@angular/router';
import { data } from 'jquery';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  refreshTokenTimeout!: NodeJS.Timeout;
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  currentUser!: Users;
  decodedToken: any;
  constructor(
    private http: HttpClient,
    private snotifyService: NgSnotifyService,
    private router: Router
  ) {}

  login(model: UserForLoginParam): Observable<UserForLogged> {
    return this.http.post<UserForLogged>(this.baseUrl + 'login', model).pipe(
      tap((res) => {
        if (res) {
          localStorage.setItem(LocalStorageConstants.TOKEN, res.token);
          localStorage.setItem(
            LocalStorageConstants.USER,
            JSON.stringify(res.user)
          );
          localStorage.setItem(
            LocalStorageConstants.VERSION,
            environment.appVersion
          );

          if (model.remember_me) {
            localStorage.setItem(
              LocalStorageConstants.REFRESH_TOKEN,
              res.refreshToken
            );
          }

          this.decodedToken = this.jwtHelper.decodeToken(res.token);
          this.currentUser = res.user;
          this.startRefreshTokenTimer();
        }
      })
    );
  }
  loggedIn(): boolean {
    const token: string | null = localStorage.getItem(
      LocalStorageConstants.TOKEN
    );
    const user: string | null = localStorage.getItem(
      LocalStorageConstants.USER
    );
    if (user != null && token != null) {
      const curentUser: Users = JSON.parse(user);
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
  logout(): void {
    let requestTokenLocal: string | null = localStorage.getItem(
      LocalStorageConstants.REFRESH_TOKEN
    );
    let tokenRequest: TokenRequest = {
      token: requestTokenLocal!,
    };
    this.http.post<any>(`${this.baseUrl}revoketoken`, tokenRequest).subscribe();
    localStorage.removeItem(LocalStorageConstants.TOKEN);
    localStorage.removeItem(LocalStorageConstants.REFRESH_TOKEN);
    localStorage.removeItem(LocalStorageConstants.USER);
    localStorage.removeItem(LocalStorageConstants.VERSION);
    this.stopRefreshTokenTimer();
    this.decodedToken = null;
    this.snotifyService.success(
      MessageConstants.LOGGED_OUT,
      CaptionConstants.LOGIN_SUCCESS
    );
    this.router.navigate(['/login']);
  }

  private startRefreshTokenTimer() {
    // Gán timeout để làm mới token trước 1 phút nó hết hạn
    const expires = new Date(this.decodedToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;

    this.refreshTokenTimeout = setTimeout(
      () =>
        this.refreshToken()
          .pipe(filter((myUser): myUser is UserForLogged => !!myUser))
          .subscribe(),
      timeout
    );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
  refreshToken(): Observable<UserForLogged | null> {
    let requestTokenLocal: string | null = localStorage.getItem(
      LocalStorageConstants.REFRESH_TOKEN
    );
    let tokenRequest: TokenRequest = {
      token: requestTokenLocal!,
    };
    if (tokenRequest.token) {
      return this.http
        .post<UserForLogged>(`${this.baseUrl}refreshtoken`, tokenRequest)
        .pipe(
          map((res) => {
            localStorage.setItem(LocalStorageConstants.TOKEN, res.token);
            localStorage.setItem(
              LocalStorageConstants.USER,
              JSON.stringify(res.user)
            );
            localStorage.setItem(
              LocalStorageConstants.VERSION,
              environment.appVersion
            );
            localStorage.setItem(
              LocalStorageConstants.REFRESH_TOKEN,
              res.refreshToken
            );
            this.decodedToken = this.jwtHelper.decodeToken(res.token);
            this.currentUser = res.user;
            this.startRefreshTokenTimer();
            return res;
          })
        );
    } else {
      return of(null);
    }
  }
}
