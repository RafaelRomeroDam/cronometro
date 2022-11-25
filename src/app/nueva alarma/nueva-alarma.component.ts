import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-alarma',
  templateUrl: 'nueva-alarma.component.html',
  styleUrls: ['./nueva-alarma.component.css']
})

export class NuevaAlarmaComponent implements OnInit {
  @Input() obj;
  @Input() activo;
  @Output('cancelar') cancelarEvento = new EventEmitter();

  ngOnInit () {
  }

  cancelarModal() {
    this.cancelarEvento.emit(this.obj);
  }
  
  sonIguales (alarma) {
    if (alarma.nombre === this.obj.alarmaSeleccionada.nombre) {
      return true;
    } else {
      return false;
    }
  }
}