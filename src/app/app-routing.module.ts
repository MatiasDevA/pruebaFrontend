import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HistorialComponent } from './historial/historial.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "", redirectTo:"main", pathMatch:"full"},
  {
    path:"main", component:MainComponent
  },
  {path: "form", component:FormularioComponent},
  {path: "historial", component:HistorialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
