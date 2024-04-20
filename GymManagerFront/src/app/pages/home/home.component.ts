import { Component, ElementRef, HostListener, Input, OnInit, Renderer2  } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/core/services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  hasSession: boolean = false;

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.hasSession = this.accountService.validatorSession()
  }

  
}
