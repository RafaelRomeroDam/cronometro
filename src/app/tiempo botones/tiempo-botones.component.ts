import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tiempo-botones',
  templateUrl: './tiempo-botones.component.html',
  styleUrls: ['./tiempo-botones.component.css']
})

export class TiempoBotonesComponent{
  @Input() obj:Object;
  @Input() opcionApp:number;
  @Output('iniciar') iniciarEvento = new EventEmitter();
  @Output('agregar') agregarEvento = new EventEmitter();
  @Output('reiniciar') reiniciarEvento = new EventEmitter();
  iniciar () {
    this.iniciarEvento.emit(this.obj);
  }
  agregar () {
    this.agregarEvento.emit(this.obj);
  }
  reiniciar () {
    this.reiniciarEvento.emit(this.obj);
  }
}
