import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service'

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  bitcoin = ''
  toCurr = 'USD'
  res = null
  errMsg = ''

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
  }

  async onConvert(ev) {
    ev.preventDefault()
    if (!this.bitcoin) {
      this.errMsg = 'Amount is required'
      setTimeout(() => {
        this.errMsg = null;
      }, 2000);
      return;
    }

    let rate;
    if (navigator.onLine) rate = await this.bitcoinService.getRate(this.toCurr)
    else rate = JSON.parse(localStorage.getItem('rate'));
    const res = (1 / +rate * +this.bitcoin).toFixed(5)
    this.res = res

  }

}
