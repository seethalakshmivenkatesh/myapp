import { Component } from '@angular/core';

@Component({
  selector: 'conditionalcomponent',
  imports: [],
  templateUrl: './conditionalcomponent.html',
  styleUrl: './conditionalcomponent.css',
})
export class Conditionalcomponent {
  display = false;
  displayDiv = true;
  show() {
    this.display = !this.display;
  }

  DivDisplay() {
    this.displayDiv = !this.displayDiv;
  }
}
