import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAdderComponent } from './contacts-adder.component';

describe('ContactsAdderComponent', () => {
  let component: ContactsAdderComponent;
  let fixture: ComponentFixture<ContactsAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
