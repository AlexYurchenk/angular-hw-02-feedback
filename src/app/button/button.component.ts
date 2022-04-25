import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() feedbackType!: string;
  @Output() onFeedbackClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  onClick(e: Event) {
    this.onFeedbackClick.emit(
      (<HTMLButtonElement>e.target).textContent as string
    );
  }
  ngOnInit(): void {}
}
