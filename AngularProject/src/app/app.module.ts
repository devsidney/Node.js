import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorld } from './primerComponente/primer.component' // Importamos la clase HelloWorld de dentro del arhivo.


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    AboutComponentComponent // Usamos el componente que acabamos de importar.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
