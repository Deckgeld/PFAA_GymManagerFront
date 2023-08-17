import { Component, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 54) {
      this.renderer.addClass(this.el.nativeElement.querySelector('#menu'), 'bg-dark');
      this.isScrolled = true;
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('#menu'), 'bg-dark');
      this.isScrolled = false;
    }
  }
}