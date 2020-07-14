import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-letters-list',
  templateUrl: './letters-list.component.html',
  styleUrls: ['./letters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LettersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
