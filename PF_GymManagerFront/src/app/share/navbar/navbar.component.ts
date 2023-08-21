import { Component, ElementRef, HostListener, Input, OnInit, Renderer2  } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  hasSession: boolean = false;
  isHome = false;


    constructor(
      private cookie:CookieService,
      private renderer: Renderer2, 
      private el: ElementRef    
    ) {
      this.validatorSession()
      const currentUrl = window.location.href;
      this.isHome = currentUrl === 'http://localhost:4200/home';
      console.log(this.isHome)
    }

    ngOnInit() {
      
    }
    

    validatorSession() {
      const session = this.cookie.get('session');
      let dataUser;
      
      if (!!session) {
        dataUser = JSON.parse(atob(session !== undefined ? session : ''));
      }
      if (dataUser?.hasSession) {
        this.hasSession=true;
      }else{
        this.hasSession=false;
      }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 54) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }

}