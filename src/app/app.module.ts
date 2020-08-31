import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// api rest
import { HttpClientModule} from '@angular/common/http';

// importar componente para enrrutamiento
import { Routes, RouterModule } from '@angular/router';
// formularios reactivos
import{ ReactiveFormsModule } from '@angular/forms';
//servicios
import{ ProductoService} from './producto.service';
import { UserService} from './user.service';
import{APIService} from './api.service';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { Cuerpo1Component } from './cuerpo1/cuerpo1.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { NavegaComponent } from './navega/navega.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { IngresarComponent } from './ingresar/ingresar.component';{}
import { GaleriaComponent } from './galeria/galeria.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { from } from 'rxjs';

// se generan los paths o rutas para cada vista (componentes)

const routes: Routes =[
  { path: 'inicio', component: InicioComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'galeria', component: GaleriaComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'producto', component: ProductoComponent},
    
  // Ir a inicio cuando esté vacía
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
     // ruta que no existe o redirigirlo a otro componente que muestre mensaje de error
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }

]; 

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavegacionComponent,
    Cuerpo1Component,
    Cuerpo2Component,
    NavegaComponent,
    InicioComponent,
    QuienesSomosComponent,
    IngresarComponent,
    GaleriaComponent,
    UsuarioComponent,
    ProductoComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    //importacion para formularios reactivos
    ReactiveFormsModule,
    // api rest
    HttpClientModule,
  ],
  providers: [
    ProductoService,
    UserService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
