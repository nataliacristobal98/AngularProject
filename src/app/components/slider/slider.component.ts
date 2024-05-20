import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  
  @Input() nombre!:string;
  @Input() size!:string;

  constructor(){

  }
}
