import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() feedbackType!: string;
  @Output() onGoodFeedbackClick: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() onNeutralFeedbackClick: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() onBadFeedbackClick: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}
  onClick(e: any) {
    switch (e.target.textContent) {
      case 'good':
        this.onGoodFeedbackClick.emit(1);
        break;
      case 'bad':
        this.onBadFeedbackClick.emit(1);
        break;
      default:
        this.onNeutralFeedbackClick.emit(1);
    }
  }
  ngOnInit(): void {}
}
