import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LettersListComponent } from './components/letters-list/letters-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ContactsListComponent,
    SearchInputComponent,
    LettersListComponent,
    ContactItemComponent,
  ],
  imports: [CommonModule, ContactsListRoutingModule, SharedModule],
})
export class ContactsListModule {}
