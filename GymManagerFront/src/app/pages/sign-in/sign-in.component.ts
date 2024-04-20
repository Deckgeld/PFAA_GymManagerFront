import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { JWT, loginDto } from 'src/app/core/interfaces/account';
import { ResponseModel } from 'src/app/core/interfaces/response-models';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private accountService: AccountService,
    private router: Router,
    private alertS: SwalAlertService,
    private cookie: CookieService
  ) { }

  listenerSubmitForm(formData: loginDto) {
    this.accountService.signIn(formData).subscribe((formData: ResponseModel<JWT>) => {
      if (formData.hasError) {
        this.alertS.errorAlert('Credentials error', 'Incorrect username or password, please validate your credentials')
      }
      if (formData.message === 'Authorized') {
        console.log(formData)
        const session = { ...formData.model, hasSession: true }
        let objTemp = btoa(JSON.stringify(session));
        this.cookie.put('session', objTemp)
        this.router.navigate(['/home']);
      }
    }, (error: any) => {
      this.alertS.errorAlert('Sorry ', 'Service not available at the moment, please contact your admin')
      console.log(error)
    });
  }
}
