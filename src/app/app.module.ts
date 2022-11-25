import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Rutas*/
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CronometroComponent } from './cronometro/cronometro.component';

/*Componentes*/
import { TiempoComponent } from './tiempo/tiempo.component';
import { TiempoBotonesComponent } from './tiempo botones/tiempo-botones.component';
import { NuevoTiempoComponent } from './nuevo tiempo/nuevo-tiempo.component';
import { ListaDeTiemposComponent } from './lista de tiempos/lista-de-tiempos.component';

/*Vistas*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/*Pipes*/
import { ConversorATiempoPipe } from './pipes/conversor-a-tiempo.pipe';
import { NuevaAlarmaComponent } from './nueva alarma/nueva-alarma.component';

/*Services*/
import { ConfiguracionService } from './services/configuracion.service';
import { TiempoService } from './services/tiempo.service';

@NgModule({
  declarations: [
    AppComponent,
    /* Vistas */
    HeaderComponent,
    FooterComponent,
    /* Rutas */
    TemporizadorComponent,
    CronometroComponent,
    ConfiguracionComponent,
    /* Componentes */
    TiempoComponent,
    TiempoBotonesComponent,
    NuevoTiempoComponent,
    ListaDeTiemposComponent,
    NuevaAlarmaComponent,
    /* Pipes */
    ConversorATiempoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, ConfiguracionService, TiempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
