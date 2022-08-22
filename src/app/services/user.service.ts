import { Injectable } from '@angular/core';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User {
    return {
      _id: 'u101',
      name: 'Yossi Amir',
      coins: 150,
      moves: []
    }
  }
}
