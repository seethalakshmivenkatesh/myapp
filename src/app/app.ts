import { Component, signal } from '@angular/core';

// import { Mycomponent } from './mycomponent/mycomponent';
// import { Secondcomponent } from './secondcomponent/secondcomponent';
// import { ProfileComponent } from './customcomponent/profile';
import { Counterapp } from './counterapp/counterapp';

@Component({
  selector: 'app-root',
  imports: [Counterapp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // name: string = 'seetha';
  // data = 10;
  // data2 = 20;
  // handleClick() {
  //   console.log('button clicked');
  //   this.otherFunction();
  // }
  // otherFunction() {
  //   console.log('otherfunction called');
  // }
  // fn() {
  //   this.name = 'abc';
  // }
  // sum(a: number, b: number) {
  //   console.log(a + b);
  // }
}
