import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/data/register.service';
import { Router } from '@angular/router';

export class UserAcc{
  constructor(
    public fullName:string,
  public email:string,
  public password:string,
  public retypePassword:string,
  ){}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullName:string
  email:string
  password:string
  retypePassword:string

  userAcc : UserAcc

  constructor(private register : RegisterService,
    private router : Router) { }

  ngOnInit(): void {
    this.userAcc=new UserAcc("","","","");
  }

  registerUser(){
    this.register.createAcc(this.userAcc).subscribe(
      data=>{console.log(data)
        this.router.navigate([''])
      })
  }

}
