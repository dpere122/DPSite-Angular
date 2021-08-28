import { Component,HostListener } from '@angular/core';

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
  styleUrls: ['./app.component.less'],
  animations:[
    trigger('navAnimationState',[
      state('max',style({
        transform: 'scaleY(1.2)',
      })),
      state('min',style({
        transform: 'scaleY(1)',
      })),
      transition('max => min', animate('600ms ease-out')),
      transition('min => max', animate('1000ms ease-in'))
    ])
  ]
})
export class AppComponent {
  show = false;
  constructor (){}

  get stateName(){
    return this.show ? 'max' :'min';
  }
  @HostListener('window:scroll', ['$event'])
  onScrollEvent(){
    console.log("Scrolled");
  }
}
