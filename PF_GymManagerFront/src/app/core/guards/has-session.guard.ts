import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';


export const hasSessionGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if(!environment.hasSession){
    router.navigate(['sign-in']);
  }

  return true;
};
