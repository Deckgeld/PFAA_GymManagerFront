import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Model, ResponseArrayModel, ResponseModel } from '../interfaces/response-models';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Observable } from 'rxjs';     



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getUsers(){
    let url: string = `${environment.baseUrl}api/Users`;   
    return this.http.get<ResponseArrayModel<User>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  postUser(request: User): Observable<ResponseModel<Model>>{
    let url: string = `${environment.baseUrl}api/Users`;   
    return this.http.post<ResponseModel<Model>>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }
}
