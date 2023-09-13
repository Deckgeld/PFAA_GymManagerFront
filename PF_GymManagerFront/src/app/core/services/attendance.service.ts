import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError } from 'rxjs';
import { ResponseArrayModel } from '../interfaces/response-models';
import { Attendances } from '../interfaces/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getAttendances(){
    let url: string = `${environment.baseUrl}api/Attendance`;   
    return this.http.get<ResponseArrayModel<Attendances>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  getAttendancesToDay(){
    let url: string = `${environment.baseUrl}api/Attendance/today`;   
    return this.http.get<ResponseArrayModel<Attendances>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newAttendance(idMember: number): Observable<ResponseArrayModel<any>>{
    let url: string = `${environment.baseUrl}api/Attendance/${idMember}`;   
    return this.http.post<ResponseArrayModel<Attendances | any>>(url, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));
  }

  updateAttendance(idMember:string): Observable<ResponseArrayModel<Attendances>>{
    let url: string = `${environment.baseUrl}api/Attendance/${idMember}`;   
    return this.http.put<ResponseArrayModel<Attendances>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  deleteAttendance(id:string): Observable<ResponseArrayModel<Attendances>>{
    let url: string = `${environment.baseUrl}api/Attendance/${id}`;   
    return this.http.delete<ResponseArrayModel<Attendances>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
