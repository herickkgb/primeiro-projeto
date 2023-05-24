import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosService } from './cursos/cursos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { Meuprimeiro3Component } from './meuprimeiro3/meuprimeiro3.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModuleTsComponent } from './cursos.module.ts/cursos.module.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    Meuprimeiro3Component,
    CursosComponent,
    CursosModuleTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
