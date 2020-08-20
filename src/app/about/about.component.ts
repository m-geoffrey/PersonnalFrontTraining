import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  presentation = "Geoffrey, Développeur Web. Après ma formation chez Webforce3, j'ai continué à développer " +
    " mon apprentissage, notamment avec le framework Angular."
  contact = 'Envie d\'en savoir plus ou de me connaître? Ecrivez-moi !';

  constructor() { }

  ngOnInit() {
  }
}
