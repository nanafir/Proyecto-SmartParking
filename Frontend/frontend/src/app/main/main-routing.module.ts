import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PlazasComponent } from './plazas/plazas.component';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [

  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'registro'},
  {path: 'plazas', component: PlazasComponent},
  {path: '**', redirectTo: 'plazas'},
  {path: 'parametros', component: ParametrosComponent},
  {path: '**', redirectTo: 'parametros'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
