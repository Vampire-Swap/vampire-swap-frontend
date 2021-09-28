import { Component, Input, OnInit } from '@angular/core';
import { Pool, PoolConfiguration } from './pool';

@Component({
  selector: 'pool-card',
  templateUrl: './pool-card.component.html',
  styleUrls: ['./pool-card.component.less']
})
export class PoolCardComponent implements OnInit {

  @Input()
  public poolConfiguration: PoolConfiguration = {};

  @Input()
  public poolId: number = 0;

  @Input()
  public imagePath: string = '';

  public pool: Pool = new Pool({});

  constructor() { }

  ngOnInit(): void {
    this.pool = new Pool(this.poolConfiguration);
  }

  public toggleManageSection() {
    const manageSection = document.getElementById('manage-'+this.poolId);

    if (manageSection?.classList.contains('show')) {
      manageSection.classList.remove('show');
    }
    else {
      manageSection?.classList.add('show');
    }
  }

}
