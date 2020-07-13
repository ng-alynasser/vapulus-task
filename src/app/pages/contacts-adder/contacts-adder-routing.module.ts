import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAdderComponent } from './contacts-adder.component';

const routes: Routes = [{ path: '', component: ContactsAdderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsAdderRoutingModule { }
