export class Pool {
  firstTokenFullName: string = '';
  secondTokenFullName: string = '';
  firstTokenTicker: string = '';
  secondTokenTicker: string = '';
  earnTokenFullName: string = '';
  earnTokenTicker: string = '';
  multiplier: number = 0;
  fee: number = 0;
  apr: number = 0;
  earned: number = 0;
  staked: number = 0;
  core: boolean = false;

  constructor(poolConfiguration: PoolConfiguration) {
    if (poolConfiguration.firstTokenFullName) {
      this.firstTokenFullName = poolConfiguration.firstTokenFullName;
    }
    if (poolConfiguration.secondTokenFullName) {
      this.secondTokenFullName = poolConfiguration.secondTokenFullName;
    }
    if (poolConfiguration.firstTokenTicker) {
      this.firstTokenTicker = poolConfiguration.firstTokenTicker;
    }
    if (poolConfiguration.secondTokenTicker) {
      this.secondTokenTicker = poolConfiguration.secondTokenTicker;
    }
    if (poolConfiguration.earnTokenTicker) {
      this.earnTokenTicker = poolConfiguration.earnTokenTicker;
    }
    if (poolConfiguration.earnTokenFullName) {
      this.earnTokenFullName = poolConfiguration.earnTokenFullName;
    }
    if (poolConfiguration.multiplier) {
      this.multiplier = poolConfiguration.multiplier;
    }
    if (poolConfiguration.fee) {
      this.fee = poolConfiguration.fee;
    }
    if (poolConfiguration.apr) {
      this.apr = poolConfiguration.apr;
    }
    if (poolConfiguration.earned) {
      this.earned = poolConfiguration.earned;
    }
    if (poolConfiguration.staked) {
      this.staked = poolConfiguration.staked;
    }
    if (poolConfiguration.core) {
      this.core = poolConfiguration.core;
    }
  }
}

export interface PoolConfiguration {
  firstTokenFullName?: string;
  secondTokenFullName?: string;
  firstTokenTicker?: string;
  secondTokenTicker?: string;
  earnTokenFullName?: string;
  earnTokenTicker?: string;
  multiplier?: number;
  fee?: number;
  apr?: number;
  earned?: number;
  staked?: number;
  core?: boolean;
}