import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  currentLang: string = 'en';
  listLanguages = [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'French' },
    { id: 'ca', name: 'Catalan' },
    { id: 'es', name: 'Spanish' },
    { id: 'gl', name: 'Galician' }
  ];

  constructor(
    private translate: TranslateService
  ) {
    this.translate.addLangs(this.listLanguages.map((l) => l.id));
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.currentLang = browserLang?.match(/en|fr|ca|es|gl/) ? browserLang : 'en';

    this.translate.use(this.currentLang);
    this.translate.get('App_Title').subscribe((res) => console.log( "translate.get('App_Title') = " + res));
  }
}
