import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospero',
  templateUrl: './prospero.component.html',
  styleUrls: ['./prospero.component.scss']
})
export class ProsperoComponent implements OnInit {
  public innerWidth = window.innerWidth;
  hamburger = false;
  menuDisplay = true;
  navMenu = false;
  products = ['Ring', 'Beautiful Ring'];

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
    if (innerWidth < 992) {
      this.hamburger = true;
    }
  }

  toggleNavLinks() {
    console.log(this.navMenu);
    this.navMenu = ! this.navMenu;
  }
}
