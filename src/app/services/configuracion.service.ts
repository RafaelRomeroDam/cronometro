import { Injectable } from "@angular/core";
import { TiempoService } from "./tiempo.service";
import { OnDestroy } from "@angular/core";

@Injectable()

export class ConfiguracionService implements OnDestroy {
  sonidoActivo: boolean = true;
  alarmaSeleccionada: Object;
  listaDeAlarmas: Array<object>;
  

  constructor (private tiempoService: TiempoService) {
    const configuracion = this.tiempoService.obtenerDelLocalStorage("configuracion");
    if (configuracion) {
      this.sonidoActivo = configuracion.sonidoActivo;
      this.alarmaSeleccionada = configuracion.alarmaSeleccionada;
      this.listaDeAlarmas = configuracion.listaDeAlarmas;
    } else {
      this.sonidoActivo = true;
      this.alarmaSeleccionada = {
        src: './../../../assets/alarmas/timbre.mp3',
        nombre: 'timbre'
      };
      this.listaDeAlarmas = [
        {
          src: './../../../assets/alarmas/despertador.mp3',
          nombre: 'despertador'
        },
        {
          src: './../../../assets/alarmas/alarma de humo.mp3',
          nombre: 'humo'
        },
        {
          src: './../../../assets/alarmas/mujer gritando.mp3',
          nombre: 'mujer gritando'
        },
        {
          src: './../../../assets/alarmas/reloj antiguo.mp3',
          nombre: 'reloj antiguo'
        },
        {
          src: './../../../assets/alarmas/tic tac.mp3',
          nombre: 'tic tac'
        },
        {
          src: './../../../assets/alarmas/timbre.mp3',
          nombre: 'timbre'
        },
        {
          src: './../../../assets/alarmas/tormenta fuerte.mp3',
          nombre: 'tormenta fuerte'
        }
      ];
    }
  }

  ngOnDestroy () {
    const configuracion = { 
      sonidoActivo: this.sonidoActivo,
      alarmaSeleccionada: this.alarmaSeleccionada,
      listaDeAlarmas: this.listaDeAlarmas
    }
    this.tiempoService.guardarEnLocalStorage("configuracion", configuracion);
  }
  
  public toggleCheckbox() {
    this.sonidoActivo = !this.sonidoActivo;
  }
}