import { Component } from '@angular/core';
import { login } from 'src/app/core/interfaces/account';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private login: AccountService) {}

  resposeForm(response:login){
    console.log('Respuesta desde Sign In', response)
    this.login.SignIn(response).subscribe(console.log);
}
}
