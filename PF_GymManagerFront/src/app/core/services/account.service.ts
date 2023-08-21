import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';     
import { catchError } from 'rxjs/operators';     
import { Model, ResponseModel } from '../interfaces/response-models';
import { newUser } from '../interfaces/user';
import { login } from '../interfaces/account';
import { SwalAlertService } from './swal-alert.service';

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
 
   constructor(
      private http:HttpClient,
      private alertS: SwalAlertService
    ) { }
 
   SignIn(request: login): Observable<ResponseModel<Model>>{
    let url: string = `${this.urlBase}api/Account`;   
     return this.http.post<ResponseModel<Model>>(url, request, this.httpOptions)
     .pipe(catchError(this.errorHandler));;
   }
   
   SignUp(request: newUser): Observable<ResponseModel<Model>>{
     let url: string = `${this.urlBase}api/Users`;   
     return this.http.post<ResponseModel<Model>>(url, request, this.httpOptions)
     .pipe(catchError(this.errorHandler));;
   }


   errorHandler(error:HttpErrorResponse){
    let errorMessage = `Error Code: ${error.status}`;

    if(error.status == 404){
      this.alertS.errorAlert('Sorry, error detected, Please try again later', 'Unexpected error')
      errorMessage = `${errorMessage} \n message: ${error.error.message}`
    }
    if(error.error.hasError && error.status == 200){
      errorMessage = `message: ${error.error.message}`
    }
    return throwError(errorMessage)
  }
}
