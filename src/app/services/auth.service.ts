import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = true

  checkLoggedIn() {
      return of(this.isLoggedIn).pipe(delay(100))
  }
}
