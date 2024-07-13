import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-specialist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialist-detail.component.html',
  styleUrl: './specialist-detail.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class SpecialistDetailComponent {
  constructor(private toastr: ToastrService, public global: GlobalService) {}
  showAdd() {
    this.toastr.success('El(la) especialista ha sido agregado(a) a tu lista de favoritos', 'Favoritos');
  }
  showRemove() {
    this.toastr.info('El(la) especialista ha sido removido(a) de tu lista de favoritos', 'Favoritos');
  }
}
