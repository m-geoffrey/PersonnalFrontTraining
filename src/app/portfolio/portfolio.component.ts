import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public innerWidth = window.innerWidth;
  hamburger = false;
  menuDisplay = true;
  navMenu = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.hamburger = this.innerWidth < 992;
    if (this.hamburger) {
      this.menuDisplay = false;
    }
  }

  ngOnInit(): void {
    this.hamburger = this.innerWidth < 992;
    // if (this.hamburger) {
    //   this.navMenu
    // }
  }

  toggleNavLinks() {
    console.log(this.navMenu);
    this.navMenu = ! this.navMenu;
  }

}
