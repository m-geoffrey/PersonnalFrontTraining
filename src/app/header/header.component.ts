import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public innerWidth = window.innerWidth;
  public isMenuCollapsed = false;
  public menuDisplay = false;
  // public navDisplay = true;
  // public menuToggle = false;
  // public always = true;

  constructor() { }

  ngOnInit(): void {
    // this.innerWidth = window.innerWidth;
    // this.isMenuCollapsed = true;
    this.isMenuCollapsed = this.innerWidth >= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.isMenuCollapsed = this.innerWidth >= 992;
    if (this.isMenuCollapsed) {
      this.menuDisplay = false;
    }
  }

  toggleMenu() {
    // console.log(this.isMenuCollapsed);
    // this.menuToggle = !this.menuToggle;
    // this.isMenuCollapsed = ! this.isMenuCollapsed;
    this.menuDisplay = ! this.menuDisplay;
  }

  hideMenu() {
    this.menuDisplay = false;
  }

}
