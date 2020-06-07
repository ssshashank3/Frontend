import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  flagA:boolean=false;
  flagI:boolean=false;
  flagS:boolean=false;
  role:string;
  constructor(private http : HttpClient) {

   } 

   executeJwtAuthenticationBeanService(username,password){
    //let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password)

    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    return this.http.post<any>(`${API_URL}/authenticate`,{username,password}).pipe(
      map(
        data => {
          
          this.role=data.authorities[0].authority;
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          sessionStorage.setItem('role', this.role);
          return data
        }
      )
    )
  }


  //  executeAuthenticationBeanService(username,password){
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password)

  //   let headers = new HttpHeaders({
  //     Authorization : basicAuthHeaderString
  //   })
  //   return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`,
  //   {headers}).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem(AUTHENTICATED_USER, username);
  //         sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //         return data
  //       }
  //     )
  //   )
  //   }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
    }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }
   
  logout(){
    this.flagA=this.flagI=this.flagS=false;
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem('role');
    
  }
 getAccessFlagA(){
  this.role = sessionStorage.getItem('role')
   if(this.role==='admin'){
     this.flagA=true;
   }
   return this.flagA;
  }
   getAccessFlagS(){
    this.role = sessionStorage.getItem('role')
   if(this.role==='student'){
     this.flagS=true;
   }
   return this.flagS;
  }
   getAccessFlagI(){
    this.role = sessionStorage.getItem('role')
    if((this.getAccessFlagA()===false) && (this.getAccessFlagS()===false)){
      this.flagI=true;
    }
    return this.flagI;
 }



}

export class AuthenticationBean {

  constructor(public message : string){

  }
}
