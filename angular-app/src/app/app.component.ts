import { Component } from '@angular/core';

import{
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  show = false;
  constructor (){}
  get stateName(){
    return this.show ? 'show' :'hide';
  }
  toggle(){
    this.show = !this.show;
  }
}
