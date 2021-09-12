import { Component, OnInit } from '@angular/core';
import { faTelegram, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.less']
})
export class FooterSectionComponent implements OnInit {

  public twitterIcon: IconDefinition = faTwitter;
  public telegramIcon: IconDefinition = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
