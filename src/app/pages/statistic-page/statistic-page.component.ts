import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service'
import * as moment from 'moment';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  marketPrices = []
  confirmedTrans = []
  tradeVolume = []

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.getMarketPrices()
    this.getConfirmedTransactions()
    this.getTradeVolume()
  }

  async getMarketPrices() {
    let marketPrices = await this.bitcoinService.getMarketPrices()
    marketPrices = marketPrices.values.map(value =>
      [moment(value.x * 1000).format('MMM Do'), value.y])
    this.marketPrices = marketPrices
  }

  async getConfirmedTransactions() {
    let confirmedTrans = await this.bitcoinService.getConfirmedTransactions()
    confirmedTrans = confirmedTrans.values.map(value =>
      [moment(value.x * 1000).format('MMM Do'), value.y])
    this.confirmedTrans = confirmedTrans
  }

  async getTradeVolume() {
    let tradeVolume = await this.bitcoinService.getTradeVolume()
    tradeVolume = tradeVolume.values.map(value =>
      [moment(value.x * 1000).format('MMM Do'), value.y])
    this.tradeVolume = tradeVolume
  }

}

