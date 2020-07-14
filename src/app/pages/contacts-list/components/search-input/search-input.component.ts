import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Output,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  private destroy$: Subject<void>;

  ngOnInit(): void {
    this.destroy$ = new Subject<void>();
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.searchValue.emit(this.searchInput.nativeElement.value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
