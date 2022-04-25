import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() feedbackType!: string;
  @Output() onFeedbackClick: EventEmitter<'good' | 'bad' | 'neutral'> =
    new EventEmitter<'good' | 'bad' | 'neutral'>();

  constructor() {}
  onClick(e: Event) {
    this.onFeedbackClick.emit(
      (<HTMLButtonElement>e.target).textContent as 'good' | 'bad' | 'neutral'
    );
  }
  ngOnInit(): void {}
}
