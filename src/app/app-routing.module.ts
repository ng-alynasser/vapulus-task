import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './@core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contacts-list/contacts-list.module').then(
            (m) => m.ContactsListModule
          ),
      },
      {
        path: 'new-contact',
        loadChildren: () =>
          import('./pages/contacts-adder/contacts-adder.module').then(
            (m) => m.ContactsAdderModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
