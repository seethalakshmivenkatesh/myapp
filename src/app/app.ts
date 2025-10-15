import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mycomponent } from './mycomponent/mycomponent';
import { Secondcomponent } from './secondcomponent/secondcomponent';

@Component({
  selector: 'app-root',
  imports: [Mycomponent, Secondcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'seetha';
  data = 10;
  data2 = 20;
}
