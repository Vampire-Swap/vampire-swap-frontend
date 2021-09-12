import { Component, OnInit } from '@angular/core';
import { FeatureBanner } from 'src/app/components/feature-banner/feature-banner';

@Component({
  selector: 'landing-views',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  public features: Array<FeatureBanner> = [
    new FeatureBanner("../../../assets/stake_vmp.svg", "Stake VMP", "Earn other tokens by staking VMP in Blood Pools"),
    new FeatureBanner("../../../assets/farm_vmp.svg", "Farm VMP", "Provide liquidity in the Pumpkin Patches and earn VMP")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
