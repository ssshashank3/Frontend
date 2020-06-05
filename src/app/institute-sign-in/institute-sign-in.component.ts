import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InstituteService } from '../service/data/institute.service';

@Component({
  selector: 'app-institute-sign-in',
  templateUrl: './institute-sign-in.component.html',
  styleUrls: ['./institute-sign-in.component.css']
})
export class InstituteSignInComponent implements OnInit {
  instituteName:string;
  email: string;
  password: string;
  invalidLogin: boolean;



  constructor(private router : Router,
    private route:ActivatedRoute,
    private instituteService:InstituteService
    // private basicAuthenticationService : BasicAuthenticationService
    )
    { }

  ngOnInit(): void {
    this.instituteName=this.route.snapshot.params['instituteName'];
    console.log(this.instituteName);
    this.getInstitution(this.instituteName)
  }

getInstitution(instituteName){

this.instituteService.getInstitution(instituteName).subscribe(
  data => {
    console.log(data)
    // this.router.navigate(['welcome'])
    // this.invalidLogin = false
  },
  error => {
    console.log(error)
    // this.invalidLogin = true
  }

)
}

  // handleJwtBasicAuthLogin(){
  //   alert(this.email+" "+this.password);
  //   this.basicAuthenticationService.executeJwtAuthenticationBeanService(this.email,this.password)
  //   .subscribe(
  //     data => {
  //       console.log(data)
  //       this.router.navigate(['welcome'])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       console.log(error)
  //       this.invalidLogin = true
  //     }

  //   )

  // }
}
