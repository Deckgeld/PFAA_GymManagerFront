import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ResponseArrayModel } from '../interfaces/response-models';
import { newUserDto, userDto } from '../interfaces/user';
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
    return this.http.get<ResponseArrayModel<userDto>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newUser(request: newUserDto): Observable<ResponseArrayModel<userDto>>{
    let url: string = `${environment.baseUrl}api/Users`;   
    return this.http.post<ResponseArrayModel<userDto>>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }

  updateUser(request: newUserDto, id:string): Observable<ResponseArrayModel<userDto>>{
    let url: string = `${environment.baseUrl}api/Users/${id}`;   
    return <any>this.http.put<ResponseArrayModel<userDto>>(url, request, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
