import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'wallet-picker',
  templateUrl: './wallet-picker.component.html',
  styleUrls: ['./wallet-picker.component.less']
})
export class WalletPickerComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<WalletPickerComponent>) { }

  ngOnInit(): void {
  }

}
