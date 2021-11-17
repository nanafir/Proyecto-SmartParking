import { ParametrosService } from './parametros/service/parametros.service';
import { PlazasService } from './plazas/service/plazas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroService } from './registro/service/registro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { PlazasComponent } from './plazas/plazas.component';
import { ParametrosComponent } from './parametros/parametros.component';


@NgModule({
  declarations: [
    RegistroComponent,
    PlazasComponent,
    ParametrosComponent
  ],
  providers:[
    RegistroService,
    PlazasService,
    ParametrosService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
