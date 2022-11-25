import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-nuevo-tiempo',
	templateUrl: './nuevo-tiempo.component.html',
	styleUrls: ['./nuevo-tiempo.component.css']
})

export class NuevoTiempoComponent {
	@Input() obj: any;
	@Output('agregar') agregarEvento = new EventEmitter();
	@Output('cancelar') cancelarEvento = new EventEmitter();
	@Output('sumar') sumarEvento = new EventEmitter();
	@Output('restar') restarEvento = new EventEmitter();

	agregarALaLista () {
		this.agregarEvento.emit(this.obj);
	}
	cancelarModal() {
		this.cancelarEvento.emit(this.obj);
	}
	sumar (opcion) {
		this.obj.opcion = opcion;
		this.sumarEvento.emit(this.obj);
	}
	restar (opcion) {
		this.obj.opcion = opcion;
		this.restarEvento.emit(this.obj);
	}
}