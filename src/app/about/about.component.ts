import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contact = 'Envie d\'en savoir plus ou de me connaître? Ecrivez-moi !';

  constructor() { }

  ngOnInit() {
  }
}
