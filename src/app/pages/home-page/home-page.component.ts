import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user.model';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  user!: User
  bitcoinRate!: Observable<number>

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.bitcoinRate = this.bitcoinService.getRate(this.user.coins)
  }

}
