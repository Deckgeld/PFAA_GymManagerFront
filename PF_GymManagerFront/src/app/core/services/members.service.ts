import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { ResponseArrayModel } from '../interfaces/response-models';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError } from 'rxjs';
import { Member, MemberDto } from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getMembers(){
    let url: string = `${environment.baseUrl}api/Members`;   
    return this.http.get<ResponseArrayModel<Member>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newMember(request: MemberDto): Observable<ResponseArrayModel<any>>{
    let url: string = `${environment.baseUrl}api/Members`;   
    return this.http.post<ResponseArrayModel<Member>>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }

  updateMember(request: MemberDto, id:string): Observable<ResponseArrayModel<Member>>{
    let url: string = `${environment.baseUrl}api/Members/${id}`;   
    return this.http.put<ResponseArrayModel<Member>>(url, request, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  deleteMember(id:string): Observable<ResponseArrayModel<Member>>{
    let url: string = `${environment.baseUrl}api/Members/${id}`;   
    return this.http.delete<ResponseArrayModel<Member>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
