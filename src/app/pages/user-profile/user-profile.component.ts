import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service';
import { User } from '../../models/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  rate = null
  currUser: User;
  userMoves = []
  lastUserMoves = []


  constructor(private userService: UserService, private bitcoinService: BitcoinService, private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.currUser = this.userService.getUser()
    const rate = this.getRate()
    this.rate = rate
    this.userMoves = this.getUserMoves()
    this.lastUserMoves = this.getLastUserMoves()

  }

 getUserMoves() {
    let userMovesCopy = JSON.parse(JSON.stringify(this.currUser.moves))
    userMovesCopy = userMovesCopy.map(move => {
      move.at = this.datePipe.transform(move.at * 1000, 'dd MMM yyyy');
      move = [ move.at, move.amount ]
      return move;
    })
    return userMovesCopy
  }

  getLastUserMoves() {
    return JSON.parse(JSON.stringify(this.currUser.moves)).slice(0, 3)
  }

  async getRate() {
    const rate = await this.bitcoinService.getRate()
    return rate
  }

}
