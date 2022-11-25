import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggleMenu', [
      state('inicial', style({
        left: '-270px'
      })),
      state('final', style({
        left: '0px'
      })),
      transition('inicial => final', animate(200)),
      transition('final => inicial', animate(200))
    ])
  ]
})

export class HeaderComponent{
  menuActivo: boolean = false;
  anchoDePantalla: number = 0;
  state = 'inicial';
  constructor( ) {
  }
  toggleMenu () {
    this.menuActivo = !this.menuActivo;
    if (this.menuActivo) {
      this.state = 'final';
    } else {
      this.state = 'inicial';
    }
  }
  ngOnInit() {
    this.anchoDePantalla = window.innerWidth;
    window.addEventListener('resize', (e) => {
      this.medirAnchoDePantalla();
    });
  }

  medirAnchoDePantalla() {
    this.anchoDePantalla = window.innerWidth;
    if (this.anchoDePantalla > 650) {
      this.menuActivo = false;
      if (this.menuActivo) {
        this.state = 'final';
      } else {
        this.state = 'inicial';
      }
    }
  }

  desactivarMenu () {
    this.menuActivo = false;
    if (this.menuActivo) {
      this.state = 'final';
    } else {
      this.state = 'inicial';
    }
  }
}