import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';     
import { Model, ResponseModel } from '../interfaces/response-model';
import { newUser } from '../interfaces/user';
import { login } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   urlBase: string = 'https://localhost:7025/';
   

   httpOptions = {
     headers:new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }
 
   constructor(private http:HttpClient) { }
 
   SignIn(request: login): Observable<ResponseModel<Model>>{
    console.log("Service" + request) 
    let url: string = `${this.urlBase}api/Account`;   
     return this.http.post<ResponseModel<Model>>(url, request, this.httpOptions);
   }
   
   SignUp(request: newUser): Observable<ResponseModel<Model>>{
    console.log("Service" + request) 
     let url: string = `${this.urlBase}api/Users`;   
     return this.http.post<ResponseModel<Model>>(url, request, this.httpOptions);
   }
}
