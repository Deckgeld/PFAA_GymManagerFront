import { Component, ElementRef, HostListener, Input, Renderer2  } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isScrolled = false;
  hasSession = environment.hasSession;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

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
