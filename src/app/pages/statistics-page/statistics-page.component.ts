import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  marketPrice!: { name: string, description: string, values: any }
  confirmedTransactions!: { name: string, description: string, values: any }

  async ngOnInit() {
    this.marketPrice = this.prepData(await lastValueFrom(this.bitcoinService.getMarketPrice()))
    this.confirmedTransactions = this.prepData(await lastValueFrom(this.bitcoinService.getConfirmedTransactions()))
  }

  prepData(BitcoinData: { name: string, description: string, values: any }) {
    const { name, description, values } = BitcoinData
    const bitcoinValues: number[] = values.map((value: { x: number, y: number }) => [value.x,value.y])
    return {
      name,
      description,
      values: bitcoinValues,
    }
  }
}
