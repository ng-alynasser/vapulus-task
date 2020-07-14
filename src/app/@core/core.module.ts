import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NavbarComponent,
  FooterComponent,
  ContentLayoutComponent,
} from './components';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ContentLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
