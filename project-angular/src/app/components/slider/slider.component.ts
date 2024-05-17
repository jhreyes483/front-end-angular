import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent  implements OnInit{
    /** parametros que recive el componente **/
    @Input() nombre : any;
    @Input() size : any;
    /**************************************** */
  public title :any;
    ngOnInit() {
      this.title = this.nombre
      console.log(this.nombre);
    }

}
