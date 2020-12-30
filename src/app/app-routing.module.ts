import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path : "userhome", component:UserhomeComponent},
  {path : '',redirectTo:"/applicationhome",pathMatch:"full"},
  {path : "applicationhome", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
