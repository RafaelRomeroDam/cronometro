import { Injectable } from "@angular/core";

@Injectable()

export class TiempoService {

  constructor() { }


  public guardarEnLocalStorage(nombreItem, item) {
    return localStorage.setItem(nombreItem, JSON.stringify(item));
  }

  public obtenerDelLocalStorage (nombreItem) {
    const item = localStorage.getItem(nombreItem);
    if (item !== null) {
      return JSON.parse(item);
    } else {
      return false;
    }
  }

  public cambiarTitulo (opts, str, tiempo, iteraciones) {
    const tituloOriginal = 'TimeToTime';
    if (opts === 1) {
      document.title = `${tituloOriginal}-${str}`;
    } else if (opts === 2) {
      document.title = tiempo.hora + ':' +
        ((tiempo.minuto <= 9) ? '0' + tiempo.minuto : tiempo.minuto) + ':' +
        ((tiempo.segundo <= 9) ? '0' + tiempo.segundo : tiempo.segundo) +
        ` ${tituloOriginal}-${str}`;
    }
  }

  public tiempoNulo (tiempo) {
    if (parseInt(tiempo.hora) === 0 && parseInt(tiempo.minuto) === 0 && parseInt(tiempo.segundo) === 0) {
      return true;
    } else {
      return false;
    }
  }

  public inicializarTiempo (tiempo, opts) {
    if (opts === 1) {
      tiempo.hora = tiempo.minuto = tiempo.segundo = 0;
    } else {
      tiempo.hora = tiempo.minuto = tiempo.segundo = '';
    }
  }

  public clonarObjeto(obj) {
    return Object.assign({}, obj);
  }
}