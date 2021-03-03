import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},

  
  {path:'main',component:MainComponent},
  {path:'addemployee',component:AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
