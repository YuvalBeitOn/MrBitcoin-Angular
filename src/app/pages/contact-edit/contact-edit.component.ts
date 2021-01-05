import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact-service/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = { name: '', phone: '', email: '', imgUrl: '' };
  validatePhone = ''
  validateName = ''
  validateEmail = ''

  constructor(private contactService: ContactService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.loadContact(id)
    })
  }

  loadContact(id) {
    if (id) {
      const contact$ = this.contactService.getContactById(id)
      contact$.subscribe(contact => {
        this.contact = contact
      })
    } else this.contact = this.contactService.getEmptyContact()
  }

  validateForm() {
    if (!this.contact.phone) {
      this.validatePhone = 'Phone is required'
      return false
    }
    if (!this.contact.name) {
      this.validateName = 'Name is required'
      return false
    }
    if (!this.contact.email || !this.contact.email.includes('@') || !this.contact.email.includes('.')) {
      this.validateEmail = 'Email is invalide'
      return false
    }
    return true
  }

  submitForm() {
    const isValid = this.validateForm();
    if (isValid) {
      this.contactService.saveContact(this.contact);
      this.router.navigateByUrl('/contacts');
    }
  }
}
