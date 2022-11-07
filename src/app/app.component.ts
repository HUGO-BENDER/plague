import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService } from './UI/shared/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appsidenav', { static: true }) public sidenav!: MatSidenav;
  currentLang: string = 'en';
  listLanguages = [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'French' },
    { id: 'ca', name: 'Catalan' },
    { id: 'es', name: 'Spanish' },
    { id: 'gl', name: 'Galician' },
  ];

  constructor(private translate: TranslateService,
    private sidenavService: SidenavService) {
    this.IniTranslation();
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  IniTranslation() {
    this.translate.addLangs(this.listLanguages.map((l) => l.id));
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.currentLang = browserLang?.match(/en|fr|ca|es|gl/) ? browserLang : 'en';
    this.translate.use(this.currentLang);
  }
}
