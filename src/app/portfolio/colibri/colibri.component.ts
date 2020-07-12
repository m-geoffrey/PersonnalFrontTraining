import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window.service';

// import { element } from 'protractor';


// const {innerWidth} = window;

@Component({
  selector: 'app-colibri',
  templateUrl: './colibri.component.html',
  styleUrls: ['./colibri.component.scss']
})
export class ColibriComponent implements OnInit {
  // public innerWidth = window.innerWidth;
  public innerWidth;
  fadeInRight = false;
  fadeInUp = false;
  hamburger = false;
  navDisplay = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}


  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    innerWidth = this.innerWidth = event.target.innerWidth;
    this.hamburger = this.innerWidth < 992;
    if (this.hamburger) {
      this.navDisplay = false;
    }
    // console.log(this.innerWidth);
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
    console.log('ok');
    this.navDisplay = ! this.navDisplay;
    console.log(this.navDisplay);
  }

}
