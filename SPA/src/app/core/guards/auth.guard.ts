import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.loggedIn()) {
      console.log('Not authenticated');
      this.router.navigate(['/login']);
      return true;
    } else {
      console.log('Authentication guard satisfied.');
      return true;
    }
  }
}
