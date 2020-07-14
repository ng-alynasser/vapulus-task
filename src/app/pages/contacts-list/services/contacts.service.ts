import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { data as contacts } from '../mockup-data/contacts.json';
import { data as recentContacts } from '../mockup-data/recent-contact.json';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly contactSubject: BehaviorSubject<Contact[]>;
  private readonly recentContactSubject: BehaviorSubject<Contact[]>;
  private readonly loadingSubject: BehaviorSubject<boolean>;
  private readonly dataStore: {
    contacts: Contact[];
    recentContacts: Contact[];
  };

  constructor() {
    this.dataStore = {
      contacts: [],
      recentContacts: [],
    };
    this.contactSubject = new BehaviorSubject([]);
    this.recentContactSubject = new BehaviorSubject([]);
    this.loadingSubject = new BehaviorSubject(true);
    this.initState();
  }

  initState(): void {
    this.dataStore.contacts = contacts;
    this.dataStore.recentContacts = recentContacts;

    this.contactSubject.next(Object.assign({}, this.dataStore).contacts);
    this.recentContactSubject.next(
      Object.assign({}, this.dataStore).recentContacts
    );
    this.loadingSubject.next(false);
  }

  get contacts(): Observable<Contact[]> {
    return this.contactSubject.asObservable();
  }

  get recentContacts(): Observable<Contact[]> {
    return this.recentContactSubject.asObservable();
  }

  get loading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  searchContacts(value: string): Observable<Contact[]> {
    this.loadingSubject.next(true);
    return this.contactSubject.pipe(
      map((contacts) => {
        return contacts.filter(
          (contact) =>
            (contact.firstName &&
              contact.firstName.toLowerCase().startsWith(value)) ||
            (contact.lastName &&
              contact.lastName.toLowerCase().startsWith(value)) ||
            (contact.email && contact.email.toLowerCase().startsWith(value))
        );
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  addContact(contact: Contact): Observable<boolean> {
    this.dataStore.recentContacts.unshift(contact);
    this.dataStore.contacts.unshift(contact);

    this.contactSubject.next(Object.assign({}, this.dataStore).contacts);
    this.recentContactSubject.next(
      Object.assign({}, this.dataStore).recentContacts
    );

    return of(true);
  }
}
