import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/core/interfaces/account';
import { Model, ResponseModel } from 'src/app/core/interfaces/response-model';
import { AccountService } from 'src/app/core/services/account.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private login: AccountService,
    private router: Router
    ) {}

  resposeForm(response:login){
    this.login.SignIn(response).subscribe((response:ResponseModel<Model>) => {
      if(response.message === 'Authorized'){
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    });
}
}
