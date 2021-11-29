import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteHijoUnoComponent } from './componente-hijo-uno/componente-hijo-uno.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoDosComponent } from './componente-hijo-dos/componente-hijo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoUnoComponent,
    ComponentePadreComponent,
    ComponenteHijoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
