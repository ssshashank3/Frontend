import { Component, OnInit } from '@angular/core';

export class UserAccount{

  constructor(public email: String,
    public password : String 
    ){
      
    }

}

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  email: String
  password : String 

  constructor() { }

  ngOnInit() {
  }

  handleSignIn(){
    
  }

}
