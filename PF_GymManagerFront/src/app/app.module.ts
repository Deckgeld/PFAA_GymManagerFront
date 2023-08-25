import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModel } from 'src/material.module';
import { NavbarComponent } from './share/navbar/navbar.component';
import { LayoutComponent } from './share/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { RouterModule } from '@angular/router';
import { UserEditorModalComponent } from './components/user-editor-modal/user-editor-modal.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModel,
    HttpClientModule,
    CookieModule.withOptions(),
    RouterModule.forRoot([])
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
