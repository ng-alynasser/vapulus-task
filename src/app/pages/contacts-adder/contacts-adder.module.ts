import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsAdderRoutingModule } from './contacts-adder-routing.module';
import { ContactsAdderComponent } from './contacts-adder.component';


@NgModule({
  declarations: [ContactsAdderComponent],
  imports: [
    CommonModule,
    ContactsAdderRoutingModule
  ]
})
export class ContactsAdderModule { }
