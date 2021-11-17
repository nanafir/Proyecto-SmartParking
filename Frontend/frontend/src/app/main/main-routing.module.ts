import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }