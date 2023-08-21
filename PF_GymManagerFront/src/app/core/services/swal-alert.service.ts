import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {

  errorAlert(title:string, description:string){
    return Swal.fire({
      title: title,
      text: description,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#31a3d'
    })
  }
}
