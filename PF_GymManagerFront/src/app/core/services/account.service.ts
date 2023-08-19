import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';     
import { ResponseModelLogin, login } from '../interfaces/account';
import { ResponseModelNewUser, newUser } from '../interfaces/user';

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
 
   SignIn(request: login): Observable<ResponseModelLogin<any>>{
    console.log("Service") 
    let url: string = `${this.urlBase}api/Account`;   
     return this.http.post<ResponseModelLogin<any>>(url, request, this.httpOptions);
   }
   
   SignUp(request: newUser): Observable<ResponseModelNewUser<any>>{
     let url: string = `${this.urlBase}api/Users`;   
     return this.http.post<ResponseModelNewUser<any>>(url, request, this.httpOptions);
   }
}
