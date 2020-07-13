import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';


@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsListRoutingModule
  ]
})
export class ContactsListModule { }
