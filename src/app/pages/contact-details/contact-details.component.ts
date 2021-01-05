import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact-service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user-service/user.service';
import { Contact } from 'src/app/models/contact.model';
import { User } from '../../models/user.model';
import { Move } from '../../models/move.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactId: string;
  idSub: Subscription;
  contactSub: Subscription;
  user: User;
  moves: Move[];
  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getParams();
    this.getContactById();
    this.getUser();
  }

  getUser(): void {
    this.user = this.userService.getUser();
  }

  getParams(): void {
    this.idSub = this.route.params.subscribe((params) => {
      this.contactId = params['id'];
    });
  }

  getContactById(): void {
    this.contactSub = this.contactService
      .getContactById(this.contactId)
      .subscribe((contact) => {
        this.contact = contact;
      });
  }

  deleteContact(): void {
    this.contactService.deleteContact(this.contactId);
    this.location.back();
  }

  onNextContact() {
    const nextContactId = this.contactService.getNextContactId(this.contact._id)
    this.router.navigate(['contact', { id: nextContactId }]);
  }

  onPrevContact() {
    const prevContactId = this.contactService.getPrevContactId(this.contact._id)
    this.router.navigate(['contact', { id: prevContactId }]);
  }

  handleTransfer(amount: number): void {
    this.userService.addMove(this.contact, amount)
  }

  get userMoves(): any[] {
    return this.moves = this.user.moves.filter(move => move.toId === this.contactId);
  }

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
    this.contactSub.unsubscribe();
  }

}
