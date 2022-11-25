import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})

export class ConfiguracionComponent implements OnInit{
  modalActivo: boolean;
  state = 'final';
  constructor (public configuracionService: ConfiguracionService) {
  }
  ngOnInit () {
    this.modalActivo = false;
  }
  cambiar () {
    if (this.state === 'inicial') {
      this.state = 'final';
    } else {
      this.state = 'inicial';
    }
  }
  activarModal() {
    this.modalActivo = true;
  }
  cancelarModal() {
    this.modalActivo = false;
  }
}