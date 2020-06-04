import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createAcc(userAcc){
    return this.http.post(`http://localhost:8081/users`, userAcc)
  }
}
