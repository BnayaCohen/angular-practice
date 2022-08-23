import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user.model';
import { map, Observable, Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.model';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  user!: User
  user$!: Observable<User>;
  userSubscription!: Subscription
  bitcoinRate!: Observable<number>
  movesList!: Move[]

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user)
    this.bitcoinRate = this.bitcoinService.getRate(this.user.coins)
    this.movesList = this.user.moves.filter((move, i) => i < 3)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
