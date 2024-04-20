import { Component, ElementRef, HostListener, Input, OnInit, Renderer2  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';

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
      private router: Router,
      private alertS: SwalAlertService,
      private accountService: AccountService
    ) {}

    ngOnInit() {
      this.hasSession = this.accountService.validatorSession()
      this.checkIsHome();

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkIsHome();
        }
      });
  
    }
    
    checkIsHome() {
      const currentUrl = window.location.href;
      this.isHome = currentUrl === 'http://localhost:4200/home';
      console.log(this.isHome);
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

    signOut(){
      this.alertS.confirmLogOutAlert();
    }

}