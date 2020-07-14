import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadInputComponent {
  @Output() imageFile: EventEmitter<File>;
  previewImage: any;

  constructor(private readonly cdr: ChangeDetectorRef) {
    this.imageFile = new EventEmitter();
  }

  uploadImage(event: Event): void {
    const image = (event.target as HTMLInputElement).files[0];

    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.previewImage = reader.result;
        this.cdr.detectChanges();
      };
    }
  }
}
