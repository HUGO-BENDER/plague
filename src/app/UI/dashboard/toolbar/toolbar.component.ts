import { Component } from '@angular/core';
import { SidenavService } from 'src/app/UI/shared/services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent  {

  constructor(
    private sidenavService: SidenavService) { }

  toggleAppSidenav() {
    this.sidenavService.toggle();
  }
}
