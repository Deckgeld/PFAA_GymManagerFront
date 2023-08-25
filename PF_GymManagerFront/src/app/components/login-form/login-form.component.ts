import { Component, EventEmitter, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { newUserDto, userDto } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{

  @Input() isSingUp!: boolean;
  @Input() confirmButtonText!: string;
  @Output() resposeForm: EventEmitter<any> = new EventEmitter()

  @Input() rowUserForm?:newUserDto; 
  @Output() cancelForm: EventEmitter<boolean> = new EventEmitter();

  formUser!: FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }
  extraFields = {
    phoneNumber: new FormControl('', Validators.required)
  }

  hasSession: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cookie: CookieService,
    private accountService: AccountService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    
    const { rowUserForm } = changes;

  
    this.initForm();
    this.hasSession = this.accountService.validatorSession();

    if (!!rowUserForm?.currentValue) {
      this.loadUserInForm(rowUserForm.currentValue);
    }
  }
  loadUserInForm(currentValue: newUserDto) {
    this.formUser.patchValue(currentValue);
  }

  initForm() {
    
    let userFields = { ...this.defaultFields }

    if (this.isSingUp) {
      userFields = { ...this.defaultFields, ...this.extraFields }
    }
    this.formUser = this.fb.group(
      userFields
    )
  }

  onSubmitForm() {
    let request = { ...this.formUser.value }
    if (!this.isSingUp) {
      request = { password: this.formUser.value.password, userName: this.formUser.value.email }
    }
    this.resposeForm.emit(request);
  }
  cancelBtn(){
    this.cancelForm.emit(true);
  }
}
