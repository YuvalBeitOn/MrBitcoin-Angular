import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contactName: String;
  @Input() maxCoins: Number;
  @Output() handleTransfer = new EventEmitter();

  fund: number;
  errMsg = ''
  successMsg = ''

  constructor() { }

  onTransferFund() {
    if (!this.fund) {
      this.sendUserMsg("Amount is required");
      return;
    }
    if (this.fund > this.maxCoins) {
      this.sendUserMsg("Unapproved transfer");
      return;
    }
    this.handleTransfer.emit(this.fund)
    this.sendUserMsg("Successful transfer");
    this.fund = null
  };

  sendUserMsg(msg) {
    if (msg !== "Successful transfer") this.errMsg = msg;
    else this.successMsg = msg;
    setTimeout(() => {
      this.errMsg = null;
      this.successMsg = null;
    }, 3000);
  };


  ngOnInit(): void {
  }

}
