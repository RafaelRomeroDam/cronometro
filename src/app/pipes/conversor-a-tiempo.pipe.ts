import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorATiempo'
})

export class ConversorATiempoPipe implements PipeTransform {
  transform (tiempoNumero) {
    return (tiempoNumero < 10) ? `0${tiempoNumero}` : `${tiempoNumero}`;
  }
}