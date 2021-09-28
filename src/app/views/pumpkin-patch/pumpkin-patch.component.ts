import { Component, OnInit } from '@angular/core';
import { PoolConfiguration } from 'src/app/components/pool-card/pool';

@Component({
  selector: 'pumpkin-patch',
  templateUrl: './pumpkin-patch.component.html',
  styleUrls: ['./pumpkin-patch.component.less']
})
export class PumpkinPatchComponent implements OnInit {

  public poolConfigurations: Array<PoolConfiguration> = new Array<PoolConfiguration>(
    {
      firstTokenFullName: 'Vampire',
      secondTokenFullName: 'Fantom',
      firstTokenTicker: 'VMP',
      secondTokenTicker: 'FTM',
      earnTokenTicker: 'VMP',
      multiplier: 25,
      fee: 4,
      apr: 15478,
      earned: 814,
      staked: 254
    },
    {
      firstTokenFullName: 'Vampire',
      secondTokenFullName: 'USDC',
      firstTokenTicker: 'VMP',
      secondTokenTicker: 'USDC',
      earnTokenTicker: 'VMP',
      multiplier: 20,
      fee: 4,
      apr: 12050,
      earned: 201,
      staked: 3547
    },
  );

  public poolImages: Array<string> = new Array<string>(
    '../../../assets/vmp_ftm.svg',
    '../../../assets/vmp_usdc.svg'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
