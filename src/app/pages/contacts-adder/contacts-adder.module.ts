import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsAdderRoutingModule } from './contacts-adder-routing.module';
import { ContactsAdderComponent } from './contacts-adder.component';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ContactsAdderComponent,
    UploadInputComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, ContactsAdderRoutingModule, SharedModule],
})
export class ContactsAdderModule {}
