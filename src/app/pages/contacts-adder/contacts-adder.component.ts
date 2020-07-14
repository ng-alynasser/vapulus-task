import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contacts-list/services/contacts.service';
import { Contact } from '../contacts-list/models/contact.model';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contacts-adder.component.html',
  styleUrls: ['./contacts-adder.component.scss'],
})
export class ContactsAdderComponent implements OnInit {
  private destroy$: Subject<void>;

  constructor(
    private readonly contactService: ContactService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.destroy$ = new Subject();
  }

  addContact(contact: Contact): void {
    this.contactService
      .addContact(contact)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => this.router.navigateByUrl('/contacts'),
      });
  }
}
