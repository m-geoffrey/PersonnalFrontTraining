import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-colibri',
  templateUrl: './colibri.component.html',
  styleUrls: ['./colibri.component.scss']
})
export class ColibriComponent implements OnInit {
  public innerWidth = this.window.innerWidth;
  fadeInRight = false;
  fadeInUp = false;
  hamburger = false;
  navMenu = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit(): void {
    if (innerWidth < 992) {
      this.hamburger = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.hamburger = this.innerWidth < 992;
    if (this.hamburger) {
      this.navMenu = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.log(offset);
    if (offset > 1009) {
      this.fadeInRight = true;
    }
    if (offset > 310) {
      this.fadeInUp = true;
    }
  }

  navToggle() {
    this.navMenu = ! this.navMenu;
  }

}
