import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
