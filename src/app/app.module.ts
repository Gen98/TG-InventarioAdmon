import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { InventarioModule } from './inventario/inventario.module';
import { XRecibirComponent } from './bounes/x-recibir/x-recibir.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    AlmacenesComponent,
    XRecibirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    DataTablesModule,
    InventarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
