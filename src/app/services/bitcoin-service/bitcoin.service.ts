import axios from 'axios'
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private storageService: StorageService) { }

  // async getRate(coin = 'USD') {
  //   let rate = this.storageService.getFromStore('rate');
  //   if (!rate) {
  //     const res = await axios.get(`https://blockchain.info/tobtc?currency=${coin}&value=1`)
  //     rate = res.data
  //     this.storageService.setToStore('rate', rate);
  //   }
  //   console.log(rate);
  //   return rate
  // }

  async getRate(coin = 'USD') {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=${coin}&value=1`)
    return res.data
  }


async getMarketPrices() {
  let marketPrices = JSON.parse(localStorage.getItem('marketPrices'))
  if (!marketPrices) {
    marketPrices = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
    marketPrices = marketPrices.data
    localStorage.setItem('marketPrices', JSON.stringify(marketPrices));
  }
  return marketPrices
}

async getConfirmedTransactions() {
  let confirmedTrans = JSON.parse(localStorage.getItem('confirmedTrans'))
  if (!confirmedTrans) {
    confirmedTrans = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true')
    confirmedTrans = confirmedTrans.data
    localStorage.setItem('confirmedTrans', JSON.stringify(confirmedTrans));
  }
  return confirmedTrans
}

async getTradeVolume() {
  let tradeVolume = JSON.parse(localStorage.getItem('tradeVolume'))
  if (!tradeVolume) {
    tradeVolume = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true');
    tradeVolume = tradeVolume.data
    localStorage.setItem("tradeVolume", JSON.stringify(tradeVolume));
  }
  return tradeVolume
}
}
