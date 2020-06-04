import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Institution } from 'src/app/create-new-user/create-new-user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createNewUser(institutionName,institution){
    return this.http.post(`http://localhost:8081/createNewUser/${institutionName}`,institution);
  }

  fetchAllInstitution(){
    return this.http.get<Institution[]>(`http://localhost:8081/getAllDetails`);
  }

  modifyStatus(institution,status){
    return this.http.put(`http://localhost:8081/modifyUsers`,{institution,status});
  }
}
