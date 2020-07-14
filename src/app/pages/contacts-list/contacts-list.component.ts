import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contacts.service';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  recentContacts$: Observable<Contact[]>;
  loading$: Observable<boolean>;

  constructor(private readonly contactsService: ContactService) {}

  ngOnInit(): void {
    this.loading$ = this.contactsService.loading;
    this.contacts$ = this.contactsService.contacts;
    this.recentContacts$ = this.contactsService.recentContacts;
  }

  searchContacts(name: string): void {
    this.contacts$ = this.contactsService.searchContacts(name);
  }
}
