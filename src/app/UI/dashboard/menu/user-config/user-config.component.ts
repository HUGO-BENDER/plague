import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.less']
})
export class UserConfigComponent implements OnInit {

  configForm: FormGroup = this.fb.group({
    config01:[''],
    config02:[''],
    config03:[''],
    config04:['']
  });

  listLanguages: string[] = [];
  currentLang!: string;

  constructor(private translate: TranslateService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.listLanguages = this.translate.getLangs();
    this.currentLang = this.translate.currentLang;
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    //-- TODO Save select lang in DB
  }

  saveChanges(){
    alert("Save personal configuration");
  }

}
