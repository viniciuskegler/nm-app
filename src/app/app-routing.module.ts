import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/signup/sign-up.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: "full"},
  {path:'login', component: LoginComponent},
  {path:'login/signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
