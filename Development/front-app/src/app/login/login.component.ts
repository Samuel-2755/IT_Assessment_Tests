import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form;
  mensagem: any;

  constructor(privateformBuilder: FormBuilder, private loginService: LoginService) {
    this.form = privateformBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {

    console.log(this.form);

    var res;

    this.loginService.loginAPI({ email: this.form.value.email, password: this.form.value.password })
      .subscribe(response => {
        res = response;
        if (res.error !== null && res.error !== undefined) {
          alert('[WARN] ' + res.error);
        } else if (res.token !== null && res.token !== undefined) {
          alert('Login feito com sucesso!')
        } else {
          alert('[ERROR] Critical error!!!')
        }
      });

  }

}
