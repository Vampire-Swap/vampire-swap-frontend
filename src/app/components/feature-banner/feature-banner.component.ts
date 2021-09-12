import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.less']
})
export class FeatureBannerComponent implements OnInit {

  @Input()
  public imagePath: string = ""
  @Input()
  public featureTitle: string = ""
  @Input()
  public featureSubtitle: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
