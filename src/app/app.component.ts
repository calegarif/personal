import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = {value_en: 'Heroes', value_pt_BR: 'Heróis'};

  constructor(private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

       // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');

      //bootstrap 4
      setTheme('bs4');
  }

  setLang(lang: string){
    this.translate.use(lang);
  }
}
