import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroService } from './registro/service/registro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  providers:[
    RegistroService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
