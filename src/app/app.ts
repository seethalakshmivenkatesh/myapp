import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mycomponent } from './mycomponent/mycomponent';
import { Secondcomponent } from './secondcomponent/secondcomponent';
import { ProfileComponent } from './customcomponent/profile';

@Component({
  selector: 'app-root',
  imports: [Mycomponent, Secondcomponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'seetha';
  data = 10;
  data2 = 20;
  handleClick() {
    alert('button clicked');
  }
}
