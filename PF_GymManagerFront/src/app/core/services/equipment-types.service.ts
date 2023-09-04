import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ResponseArrayModel } from '../interfaces/response-models';
import { EquipmentType, EquipmentTypeDto } from '../interfaces/equipment-types';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentTypesService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getEquipmentTypes(){
    let url: string = `${environment.baseUrl}api/EquipmentTypes`;   
    return this.http.get<ResponseArrayModel<EquipmentType>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newEquipmentType(request: EquipmentTypeDto): Observable<ResponseArrayModel<any>>{
    let url: string = `${environment.baseUrl}api/EquipmentTypes`;   
    return this.http.post<ResponseArrayModel<EquipmentType> | any>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }

  updateEquipmentType(request: EquipmentTypeDto, id:string): Observable<ResponseArrayModel<EquipmentType>>{
    let url: string = `${environment.baseUrl}api/EquipmentTypes/${id}`;   
    return this.http.put<ResponseArrayModel<EquipmentType>>(url, request, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  deleteEquipmentType(id:string): Observable<ResponseArrayModel<EquipmentType>>{
    let url: string = `${environment.baseUrl}api/EquipmentType/${id}`;   
    return this.http.delete<ResponseArrayModel<EquipmentType>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
