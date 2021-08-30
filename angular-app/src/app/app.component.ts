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
        height: '85px',
        fontSize: '1.5em',
        opacity: 1
      })),
      state('min',style({
        height: '70px',
        fontSize: '1.2em',
        opacity: 0.7
      })),
      transition('max => min', animate('100ms ease-out')),
      transition('min => max', animate('100ms ease-in'))
    ])
  ]
})
export class AppComponent {
  show = true;
  constructor (){}

  get stateName(){
    return this.show ? 'max' :'min';
  }
  @HostListener('window:scroll', ['$event'])
  onScrollEvent(){
    if(window.scrollY <= 200){
      this.show = true;
    } else if(window.scrollY > 200){
      this.show = false;
    }
  }
}
