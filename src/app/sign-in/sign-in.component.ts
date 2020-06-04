import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;
  invalidLogin: boolean;

  constructor(private router : Router,
    private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleJwtBasicAuthLogin(){
    alert(this.email+" "+this.password);
    this.basicAuthenticationService.executeJwtAuthenticationBeanService(this.email,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome'])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }

    )

  }

}
