import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts-list',
    loadChildren: () =>
      import('./pages/contacts-list/contacts-list.module').then(
        (m) => m.ContactsListModule
      ),
  },
  {
    path: 'contacts-adder',
    loadChildren: () =>
      import('./pages/contacts-adder/contacts-adder.module').then(
        (m) => m.ContactsAdderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
