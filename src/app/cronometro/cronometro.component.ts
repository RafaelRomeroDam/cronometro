import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { TiempoService } from '../services/tiempo.service';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})

export class CronometroComponent implements OnDestroy {
  cronometro: any;

  constructor (private tiempoService: TiempoService) {
    const cronometroAux = this.tiempoService.obtenerDelLocalStorage("cronometro");
    if (cronometroAux) {
      this.cronometro = cronometroAux;
    } else {
      this.cronometro = {
        tiempo: {
          hora: 0,
          minuto: 0,
          segundo: 0
        },
        listaDeTiempos: [],
        nombre: 'Cronometro',
        tiempoActivo: false,
        intervalo: null
      };
    }
  }

  ngOnDestroy () {
    this.reiniciarValores(this.cronometro);
    this.tiempoService.guardarEnLocalStorage("cronometro", this.cronometro);
  }

  iniciarCronometro(obj) {
    obj.tiempoActivo = !obj.tiempoActivo;
    if (obj.tiempoActivo) {
      obj.intervalo = setInterval(() => {
        obj.tiempo.segundo++;
        if (obj.tiempo.segundo === 60) {
          obj.tiempo.minuto++;
          obj.tiempo.segundo = 0;
        }
        if (obj.tiempo.minuto === 60) {
          obj.tiempo.hora++;
          obj.tiempo.minuto = 0;
        }
        this.tiempoService.cambiarTitulo(2, obj.nombre, obj.tiempo, null);
      }, 1000)
    } else {
      this.tiempoService.cambiarTitulo(1, obj.nombre, null, null);
      clearInterval(obj.intervalo);
    }
  }

  reiniciarValores(obj) {
    obj.tiempoActivo = false;
    this.tiempoService.cambiarTitulo(1, obj.nombre, null, null);
    this.inicializarTiempo(obj.tiempo, 1);
    clearInterval(obj.intervalo);
  }

  inicializarTiempo(tiempo, opts) {
    if (opts === 1) {
      tiempo.hora = tiempo.minuto = tiempo.segundo = 0
    } else {
      tiempo.hora = tiempo.minuto = tiempo.segundo = ''
    }
  }

  agregarALista(obj) {
    const MAX = 50
    if ((!this.tiempoService.tiempoNulo(obj.tiempo)) && obj.listaDeTiempos.length < MAX && obj.tiempoActivo) {
      const clon = this.tiempoService.clonarObjeto(obj.tiempo);
      obj.listaDeTiempos.unshift(clon);
    }
  }

  eliminarTiempo(tiempo) {
    tiempo.listaDeTiempos.splice(tiempo.indice, 1);
  }
}