import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class MenuComponent  {

  Levels: string = "";
  Ranking: string = "";
  UserConfig: string = "";

  constructor(private translate: TranslateService) {
    this.translate.get('Dashboard.Menu.Levels.Title').subscribe((res) => this.Levels = res);
    this.translate.get('Dashboard.Menu.Ranking.Title').subscribe((res) => this.Ranking = res);
    this.translate.get('Dashboard.Menu.UserConfig.Title').subscribe((res) => this.UserConfig = res);
   }

}
