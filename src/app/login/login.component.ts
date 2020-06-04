import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  userModel = new User('shashank','dummy');

  constructor(private _loginService : LoginService) { }

  ngOnInit() {
    document.body.className='hold-transition login-page';
    $(() =>{
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
      });
    });

  }

  // handleLogin() {
  //   alert(this.email+" "+this.password);
  //   if(this.email==='shashank' && this.password==='dummy'){
  //     alert("welcome");
  //     //this.router.navigate(['welcome',this.email])
  //     this.invalidLogin = false
  // }else{
  //   this.invalidLogin = true
  // }
  // }

  onSubmit() {
    console.log(this.userModel);
    this._loginService.login(this.userModel)
    .subscribe(
      data => console.log("Success!",data),
      error => console.error("Error!",error)
    )
  }


}
