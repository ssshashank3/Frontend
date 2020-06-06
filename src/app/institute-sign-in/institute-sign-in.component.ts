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
  instituteName: string;
  fetchedInstituteName : String;
  email: string;
  password: string;
  invalidLogin: boolean;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  


  constructor(private router: Router,
    private route: ActivatedRoute,
    private instituteService: InstituteService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.handleJwtAuthLogin('shashank','dummy');
    this.instituteName = this.route.snapshot.params['instituteName'];
    console.log(this.instituteName);
    // this.handleJwtAuthLogin('shashank','dummy');
    
    
  }

  getInstitution(instituteName) {
    console.log("12345")
   
    this.instituteService.getInstitution(instituteName).subscribe(
      data => {
        
        this.retrieveResonse = data.logo;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + data.logo;
        this.fetchedInstituteName = data.institutionName;
        this.basicAuthenticationService.logout();
        
      },
      error => {
        console.log(error)
        
      }

    )    
    
  }

  handleJwtAuthLogin(name,pwd) {
    
    this.basicAuthenticationService.executeJwtAuthenticationBeanService(name, pwd)
      .subscribe(
        data => {
          
          this.getInstitution(this.instituteName)
        },
        error => {
          console.log(error)
        }
      )

  }



  handleJwtBasicAuthLogin() {
    alert(this.email + " " + this.password);
    this.basicAuthenticationService.executeJwtAuthenticationBeanService(this.email, this.password)
      .subscribe(
        data => {
          //console.log(data)
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
