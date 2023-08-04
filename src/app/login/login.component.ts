import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  login:string = "";
  password:string = "";
  showPassword: boolean = false;


  constructor() {
    this.form = new FormGroup({ "loginControl": new FormControl("", [Validators.required, Validators.minLength(8)]),  
      "senhaControl": new FormControl("", [Validators.required, Validators.minLength(8)])});
  }

  ngOnInit(): void {
  }

  logar(){
    window.open("https://google.com.br", "_blank");
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

}
