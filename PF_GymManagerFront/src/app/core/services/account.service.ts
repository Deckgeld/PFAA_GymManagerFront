import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';     
import { catchError } from 'rxjs/operators';     
import { Model, ResponseModel } from '../interfaces/response-models';
import { login } from '../interfaces/account';
import { ErrorHandlerService } from './error-handler.service';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   
   constructor(
      private http:HttpClient,
      private errorHandler: ErrorHandlerService,
      private cookies: CookieService 
    ) { }
 
   SignIn(request: login): Observable<ResponseModel<Model>>{
    let url: string = `${environment.baseUrl}api/Account`;   
     return this.http.post<ResponseModel<Model>>(url, request, environment.httpOptions)
     .pipe(catchError(this.errorHandler.errorHandler));;
   }

   validatorSession() {
    const session = this.cookies.get('session');
    let dataUser;
    
    if (!!session) {
      dataUser = JSON.parse(atob(session !== undefined ? session : ''));
    }
    if (dataUser?.hasSession) {
      environment.hasSession=true;
      return true;
    }else{
      environment.hasSession=false;
      return false;
    }
  }
}
