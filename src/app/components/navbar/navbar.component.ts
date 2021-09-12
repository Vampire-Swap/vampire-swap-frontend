import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBars, faBurn, faCloudMoon, faMapMarkedAlt, faSun, faTimes, faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public bloodIcon: IconDefinition = faTint;
  public plasmaIcon: IconDefinition = faBurn;
  public mapIcon: IconDefinition = faMapMarkedAlt;
  public expandIcon: IconDefinition = faBars;
  public closeIcon: IconDefinition = faTimes;
  public sunIcon: IconDefinition = faSun;
  public moonIcon: IconDefinition = faCloudMoon;

  public currentThemeIcon: IconDefinition = this.sunIcon;

  ngOnInit(): void {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.currentThemeIcon = this.moonIcon;
    }
  }

  public openMobileNavbar() {
    const mobileMenu = document.getElementById('offcanvas-menu');
    mobileMenu?.classList.add('show');
  }

  public closeMobileNavbar() {
    const mobileMenu = document.getElementById('offcanvas-menu');
    mobileMenu?.classList.remove('show');
  }

  public changeTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      this.currentThemeIcon = this.sunIcon;
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      this.currentThemeIcon = this.moonIcon;
    }
  }

}
