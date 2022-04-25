import { Component } from '@angular/core';

export interface AppComponent {
  [index: string]: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  good = 0;
  neutral = 0;
  bad = 0;
  feedbacksArray = ['good', 'neutral', 'bad'];
  updateFeedback(s: string) {
    this[s] += 1;
  }
  countTotalFeedback() {
    return this.neutral + this.good + this.bad;
  }
  countPositiveFeedbackPercentage() {
    return (this.good / (this.countTotalFeedback() / 100)).toFixed(0);
  }
}
