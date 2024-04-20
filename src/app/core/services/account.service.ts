import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';     
import { catchError } from 'rxjs/operators';     
import { ResponseModel } from '../interfaces/response-models';
import { ErrorHandlerService } from './error-handler.service';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie';
import { JWT, loginDto } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   
   constructor(
      private http:HttpClient,
      private errorHandler: ErrorHandlerService,
      private cookies: CookieService 
    ) { }
 
   signIn(request: loginDto): Observable<ResponseModel<JWT>>{
    let url: string = `${environment.baseUrl}api/Account`;   
     return this.http.post<ResponseModel<JWT>>(url, request, environment.httpOptions)
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
