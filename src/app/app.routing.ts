import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CronometroComponent } from './cronometro/cronometro.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/temporizador', pathMatch: 'full' },
	{ path: 'temporizador', component: TemporizadorComponent },
	{ path: 'configuracion', component: ConfiguracionComponent },
	{ path: 'cronometro', component: CronometroComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
