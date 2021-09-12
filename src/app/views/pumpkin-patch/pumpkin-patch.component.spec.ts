import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpkinPatchComponent } from './pumpkin-patch.component';

describe('PumpkinPatchComponent', () => {
  let component: PumpkinPatchComponent;
  let fixture: ComponentFixture<PumpkinPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpkinPatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpkinPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
