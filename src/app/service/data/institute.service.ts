import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institution } from 'src/app/create-new-user/create-new-user.component';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http: HttpClient) { }

  getInstitution(institutionName){
    return this.http.get<Institution>(`http://localhost:8081/getInstitution/${institutionName}`);
  }
}
