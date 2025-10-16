import { Component } from '@angular/core';

@Component({
  selector: 'counterapp',
  imports: [],
  templateUrl: './counterapp.html',
  styleUrl: './counterapp.css',
})
export class Counterapp {
  count: number = 0;

  // handleIncrement() {
  //   this.count = this.count + 1;
  // }
  // handleDecrement() {
  //   this.count = this.count - 1;
  // }
  // handleReset() {
  //   this.count = 0;
  // }

  handleCounter(val: string) {
    if (val == 'plus') {
      this.count = this.count + 1;
    } else if (val == 'minus') {
      this.count = this.count - 1;
    } else {
      this.count = 0;
    }
  }
}
