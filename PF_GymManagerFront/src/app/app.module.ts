import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModel } from 'src/material.module';
import { NavbarComponent } from './share/navbar/navbar.component';
import { LayoutComponent } from './share/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule, CookieService } from 'ngx-cookie';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from 'src/state/users.state';
import { environment } from 'src/environments/environment.development';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CitiesState } from 'src/state/cities.state';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModel,
    HttpClientModule,
    CookieModule.withOptions(),
    RouterModule.forRoot([]),
    NgxsModule.forRoot([UsersState, CitiesState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [Location, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
