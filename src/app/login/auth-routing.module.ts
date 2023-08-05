import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup/sign-up.component';


const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: "full"},
    {path:'login', component: LoginComponent},
    {path:'login/signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
