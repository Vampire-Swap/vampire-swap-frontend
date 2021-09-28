import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './views/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { StatsBannerComponent } from './components/stats-banner/stats-banner.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { PumpkinPatchComponent } from './views/pumpkin-patch/pumpkin-patch.component';
import { BloodPoolsComponent } from './views/blood-pools/blood-pools.component';
import { PoolCardComponent } from './components/pool-card/pool-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalletPickerComponent } from './components/wallet-picker/wallet-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MainBannerComponent,
    StatsBannerComponent,
    FeatureBannerComponent,
    FooterSectionComponent,
    PumpkinPatchComponent,
    BloodPoolsComponent,
    PoolCardComponent,
    WalletPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
