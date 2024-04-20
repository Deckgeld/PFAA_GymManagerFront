import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { LoginFormModule } from "../../components/login-form/login-form.module";


@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        LoginFormModule
    ]
})
export class SignUpModule { }
