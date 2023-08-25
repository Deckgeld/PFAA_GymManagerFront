import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userDto } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private userService: UsersService,
    private router: Router
    ) {}

  resposeForm(formData:userDto){
    this.userService.newUser(formData).subscribe(() => this.router.navigate(['/sign-in']));
  }
}
