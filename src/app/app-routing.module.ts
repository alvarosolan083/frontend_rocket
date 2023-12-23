import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolesComponent } from './arboles/arboles.component';
import { MapaComponent } from './mapa/mapa.component';
import { FotosComponent } from './fotos/fotos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
  { path: 'arboles', component: ArbolesComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'comentarios', component: ComentariosComponent },
  // Otras rutas que necesites definir
  { path: '', redirectTo: '/arboles', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/arboles' }, // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
