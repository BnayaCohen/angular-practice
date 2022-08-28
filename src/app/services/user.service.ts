import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { User } from '../models/user.model'
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user';
  private _user!: User;
  private _user$ = new BehaviorSubject<User>(this.utilService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()

  constructor(private utilService: UtilService) { }

  public signup(name: string): void {
    // let user = this.utilService.load(this.KEY);
    // if (!user) {
      let newUser = new User()
      newUser.name = name
      newUser._id = this.utilService.makeId()
      this.utilService.store(this.KEY, newUser);
      this._user = newUser;
    // }
    this._user$.next(this._user);
  }

  public addMove(contact: Contact, amount: number): void {
    let newMove = new Move()
    newMove.toId = contact._id
    newMove.to = contact.name
    newMove.at = Date.now()
    newMove.amount = amount
    const editedUser = { ...this._user$.value };
    editedUser.coins -= amount;
    editedUser.moves.unshift(newMove);
    this.utilService.store(this.KEY, editedUser);
    this._user$.next(editedUser);
  }

  public isAuthenticated(): boolean {
    const user = this._user$.getValue()
    return !!user
  }
}
