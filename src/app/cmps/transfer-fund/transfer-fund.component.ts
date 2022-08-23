import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit,OnDestroy {

  constructor(private userService: UserService,
    private router: Router) { }
  amount!: number;
  user!: User;
  userSubscriber!: Subscription
  @Input() contact!:Contact

  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

  onTransferCoins(): void {
    if (this.amount > this.user.coins) {
      console.log('you can\'t do it');
      return
    } else {
      this.userService.addMove(this.contact, this.amount);
    }
    this.router.navigate(['contacts/', this.contact._id])
  }
}
