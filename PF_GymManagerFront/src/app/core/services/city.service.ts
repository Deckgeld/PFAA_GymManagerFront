import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-models';
import { Observable, catchError } from 'rxjs';
import { City, CityDto } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http:HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getCities(){
    let url: string = `${environment.baseUrl}api/City`;   
    return this.http.get<ResponseArrayModel<City>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
  getCityById(id:number){
    let url: string = `${environment.baseUrl}api/City/${id}`;   
    return this.http.get<ResponseModel<City>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  newCity(request: CityDto): Observable<ResponseArrayModel<City>>{
    let url: string = `${environment.baseUrl}api/City`;   
    return this.http.post<ResponseArrayModel<City> | any>(url, request, environment.httpOptions)
    .pipe(catchError(this.errorHandler.errorHandler));;
  }

  updateCity(request: CityDto, id:string): Observable<ResponseArrayModel<City>>{
    let url: string = `${environment.baseUrl}api/City/${id}`;   
    return this.http.put<ResponseArrayModel<City>>(url, request, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }

  deleteCity(id:string): Observable<ResponseArrayModel<City>>{
    let url: string = `${environment.baseUrl}api/City/${id}`;   
    return this.http.delete<ResponseArrayModel<City>>(url, environment.httpOptions)
      .pipe(catchError(this.errorHandler.errorHandler));
  }
}
