import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {

  constructor(
    private cookie:CookieService,
    private router: Router  
  ) {}


  errorAlert(title:string, description:string){
    return Swal.fire({
      title: title,
      text: description,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#31a3d'
    })
  }

  successAlet(title:string){
    return Swal.fire({
      position: 'top',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

  confirmLogOutAlert(){
    return Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d6dd00',
      cancelButtonColor: '#ff5050',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cookie.remove('session');
        this.router.navigate(['/sign-in']);
      }
    })
  }
}
