import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public userService: UserService,
    private router: Router) { }


  checkLoggedIn() {
    let isLoggedIn: boolean = this.userService.isAuthenticated()
    if (!isLoggedIn) {
      this.router.navigateByUrl('/signup');
      return of(false)
    } else {
      return of(true).pipe(delay(100))
    }
  }
}
