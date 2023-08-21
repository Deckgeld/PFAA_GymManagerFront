import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';


export const hasSessionGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const cookie = inject(CookieService);

  const session = cookie.get('session');
  let dataUser;

  if(!!session){
    dataUser = JSON.parse(atob(session !== undefined ? session : ''));
  }
  if (!dataUser?.hasSession) {
    router.navigate(['sign-in']);
  } 

  return !!dataUser?.hasSession;
};
