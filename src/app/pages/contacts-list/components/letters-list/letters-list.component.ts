import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { generateAlphabet } from '@shared';

@Component({
  selector: 'app-letters-list',
  templateUrl: './letters-list.component.html',
  styleUrls: ['./letters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersListComponent implements OnInit {
  alphabetArray: string[];

  ngOnInit(): void {
    this.alphabetArray = generateAlphabet('a', 'z');
  }
}
