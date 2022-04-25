import { Component } from '@angular/core';

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
  updateNeutralFeedback(e: number) {
    this.neutral += e;
  }
  updateBadFeedback(e: number) {
    this.bad += e;
  }
  updateGoodFeedback(e: number) {
    this.good += e;
  }
  countTotalFeedback() {
    return this.neutral + this.good + this.bad;
  }
  countPositiveFeedbackPercentage() {
    return (this.good / (this.countTotalFeedback() / 100)).toFixed(0);
  }
}
