import { Component } from '@angular/core';
import { FilterbarComponent } from '../ui/filterbar/filterbar.component';

import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mapwrapper',
  standalone: true,
  imports: [FilterbarComponent,CommonModule],
  templateUrl: './mapwrapper.component.html',
  styleUrl: './mapwrapper.component.css'
})
export class MapwrapperComponent {
  hoverColor: string = ''; // Declaración e inicialización de la propiedad hoverColor

  hoverStates: boolean[] = [];
constructor(
  public global: GlobalService,
){ this.hoverStates = new Array(this.global.categories.length).fill(false);
}
setHoverState(index: number, isHovering: boolean) {
  this.hoverStates[index] = isHovering;
}
viewDetail(specialist:any){
  this.global.previewRequest=specialist;
  this.global.setRoute('specialistdetail')
}
}
