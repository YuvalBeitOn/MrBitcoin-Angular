import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service'
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service'

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

  user = this.userService.getUser();
  hover: boolean = false
  rate: any
  userUsdRate: any
  toolTipTxt: string
  tooltipStyle: string
  isOnline: boolean


  handleMouseIn() {
    this.hover = true
    this.tooltipStyle = 'block'
  }

  handleMouseOut() {
    this.hover = false
    this.tooltipStyle = 'none'
  }

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void>  {
    let rate = await this.bitcoinService.getRate()
    this.rate = rate
    this.userUsdRate = (1 / this.rate * this.user.coins).toFixed(2)
    this.toolTipTxt = navigator.onLine ? 'Online' : 'Offline'
    this.isOnline = navigator.onLine ? true : false
  }

  async getRate() {
    let rate = JSON.parse(localStorage.getItem('rate'));
    this.rate = rate
  }

}
