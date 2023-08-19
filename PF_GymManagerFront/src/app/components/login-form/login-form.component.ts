import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() isSingUp!:boolean;
  @Input() confirmButtonText!:string;

  @Output() resposeForm: EventEmitter<any> = new EventEmitter()

  formUser!: FormGroup;

  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }
  extraFields = {
    phoneNumber: new FormControl('',  Validators.required)
  }

  constructor(
    private fb:FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.initForm();
  }

  initForm(){
    let userFields = {...this.defaultFields }
    
    if (this.isSingUp){
      userFields = {...this.defaultFields, ...this.extraFields}
    }

    this.formUser = this.fb.group(
      userFields
    )
  }

  onSubmitForm(){
    let request = {...this.formUser.value}
    if(!this.isSingUp){
      request = {password: this.formUser.value.password, userName: this.formUser.value.email }
    }
    debugger;
    this.resposeForm.emit(request);
  }
}
