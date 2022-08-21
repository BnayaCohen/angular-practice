import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor() { }
  marketPrice!: any
  confirmedTransactions!: any

  async ngOnInit() {
    this.marketPrice = await BitcoinService.getMarketPrice()
    this.confirmedTransactions = await BitcoinService.getConfirmedTransactions()
  }
}
