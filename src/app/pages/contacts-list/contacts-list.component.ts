import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  constructor(private readonly contactsService: ContactService) {}

  ngOnInit(): void {}

  searchContactsByName(name: string) {
    this.contactsService.searchContacts(name).subscribe();
  }
}
