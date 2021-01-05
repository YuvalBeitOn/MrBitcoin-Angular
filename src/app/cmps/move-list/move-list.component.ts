import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move.model';


@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
@Input() moves: Move[];
@Input() isInContact: Boolean;
@Input() contactId: String;

  constructor() { }

  ngOnInit(): void {

    if (this.isInContact) {
      this.moves = this.moves.filter(move => move.toId === this.contactId)
  }
  }

}
