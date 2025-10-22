import { Component } from '@angular/core';

@Component({
  selector: 'inputcomponent',
  imports: [],
  templateUrl: './inputcomponent.html',
  styleUrl: './inputcomponent.css',
})
export class Inputcomponent {
  username = '';
  getUserName(event: Event) {
    // const name = (event.target as HTMLInputElement).value;
    // console.log(name);
    //  this.username = name;
    // this.username = (event.target as HTMLInputElement).value;
  }
  getUserNameWithTemplate(val: string) {
    this.username = val;
  }
}
