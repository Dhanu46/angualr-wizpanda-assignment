import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
  
   }
   public doLogin(user)
   {
     return this.http.post("http://localhost:8081/api/student/login",user,{responseType:'text'});
   }
 }
