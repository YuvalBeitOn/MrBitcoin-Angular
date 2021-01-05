import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {
  @Input() move: Move;
  @Input() isInContact: Boolean;
  at: string

  constructor(private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.at = this.datePipe.transform(this.move.at, 'MMM d, y')
  }

}
