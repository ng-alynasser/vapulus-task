import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '@app/pages/contacts-list/models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  codes = ['+44', '+55'];
  @Output() formValue: EventEmitter<Contact>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.formValue = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group(
      {
        firstName: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(26),
            Validators.pattern(/^[a-z0-9]+$/i),
          ]),
        ],
        lastName: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(26),
            Validators.pattern(/^[a-z0-9]+$/i),
          ]),
        ],
        code: [null],
        image: [null],
        mobileNumber: [null, Validators.required],
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320),
          ]),
        ],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  submit(): void {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const contactData: Contact = {
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
      email: controls.email.value,
      mobileNumber: `${controls.code.value}${controls.mobileNumber.value}`,
      image: controls.image.value,
    };

    this.formValue.emit(contactData);
  }

  onUploadImage(image: File): void {
    this.form.patchValue({ image });
    this.form.get('image').updateValueAndValidity();
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];

    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}
