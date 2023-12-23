import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { MapaComponent } from './mapa/mapa.component';
import { FotosComponent } from './fotos/fotos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    AppComponent,
    ArbolesComponent,
    MapaComponent,
    FotosComponent,
    ComentariosComponent,
    // ... Otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    RouterModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
