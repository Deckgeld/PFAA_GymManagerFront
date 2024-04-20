import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';     
import { SwalAlertService } from './swal-alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private alertS:SwalAlertService) { }

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
