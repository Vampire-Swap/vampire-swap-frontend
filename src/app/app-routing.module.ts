import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPoolsComponent } from './views/blood-pools/blood-pools.component';
import { LandingComponent } from './views/landing/landing.component';
import { PumpkinPatchComponent } from './views/pumpkin-patch/pumpkin-patch.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'farms',
    component: PumpkinPatchComponent
  },
  {
    path: 'pools',
    component: BloodPoolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
