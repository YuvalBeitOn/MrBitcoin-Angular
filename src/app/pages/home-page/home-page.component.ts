import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service'
import { UserService } from '../../services/user-service/user.service';
import * as moment from 'moment';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  marketPrices = []
  name: ''

  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }

  ngOnInit(): void {
    this.getMarketPrices()

  }

  async getMarketPrices() {
    let marketPrices = await this.bitcoinService.getMarketPrices()
    marketPrices = marketPrices.values.map(value =>
      [moment(value.x * 1000).format('MMM Do'), value.y])
    this.marketPrices = marketPrices
  }

  getStarted() {
    this.userService.signup(this.name)
  }

}
