import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-models';
import { Observable, catchError } from 'rxjs';
import { MembershipType, MembershipTypeDto } from '../interfaces/membership-types';

@Injectable({
  providedIn: 'root'
})
export class MembershipTypesService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getMembershipTypes(){
    let url: string = `${environment.baseUrl}api/MembershipTypes`;   
    return this.http.get<ResponseArrayModel<MembershipType>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
  getMembershipById(id:number){
    let url: string = `${environment.baseUrl}api/MembershipTypes/${id}`;   
    return this.http.get<ResponseModel<MembershipType>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newMembershipType(request: MembershipTypeDto): Observable<ResponseArrayModel<any>>{
    let url: string = `${environment.baseUrl}api/MembershipTypes`;   
    return this.http.post<ResponseArrayModel<MembershipType> | any>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }

  updateMembershipType(request: MembershipTypeDto, id:string): Observable<ResponseArrayModel<MembershipType>>{
    let url: string = `${environment.baseUrl}api/MembershipTypes/${id}`;   
    return this.http.put<ResponseArrayModel<MembershipType>>(url, request, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  deleteMembershipType(id:string): Observable<ResponseArrayModel<MembershipType>>{
    let url: string = `${environment.baseUrl}api/MembershipTypes/${id}`;   
    return this.http.delete<ResponseArrayModel<MembershipType>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
