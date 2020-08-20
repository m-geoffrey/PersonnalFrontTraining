import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-citylife',
  templateUrl: './citylife.component.html',
  styleUrls: ['./citylife.component.scss']
})
export class CitylifeComponent implements OnInit {
  public innerWidth = this.window.innerWidth;
  hamburger = false;
  navMenu = true;

  constructor(
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
}
