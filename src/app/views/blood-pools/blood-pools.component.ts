import { Component, OnInit } from '@angular/core';
import { PoolConfiguration } from 'src/app/components/pool-card/pool';

@Component({
  selector: 'blood-pools',
  templateUrl: './blood-pools.component.html',
  styleUrls: ['./blood-pools.component.less']
})
export class BloodPoolsComponent implements OnInit {

  public poolConfigurations: Array<PoolConfiguration> = new Array<PoolConfiguration>(
    {
      firstTokenFullName: 'Vampire',
      firstTokenTicker: 'VMP',
      earnTokenTicker: 'VMP',
      earnTokenFullName: 'Vampire',
      fee: 4,
      apr: 15478,
      earned: 814,
      staked: 254
    },
    {
      firstTokenFullName: 'Vampire',
      firstTokenTicker: 'VMP',
      earnTokenTicker: 'FTM',
      earnTokenFullName: 'Fantom',
      multiplier: 20,
      fee: 4,
      apr: 12050,
      earned: 201,
      staked: 3547
    },
  );

  public poolImages: Array<string> = new Array<string>(
    '../../../assets/vmp.svg',
    '../../../assets/ftm.svg'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
