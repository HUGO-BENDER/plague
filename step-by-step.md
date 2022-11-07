# Project Plague
- - - -

## step by step to build the project

<details>
<summary>Step 001: Create repository Git </summary>

    [GIT]
    create repository Git. Empty. Nothing more.  	

</details>

<details>
  <summary>Step 002: Clone repository to local</summary>
  
	[SourceTree]
	Add new tab.  Clone
	Source path = https://github.com/HUGO-BENDER/plague.git
	Destination Path = C:\athlas_tempo\Cursos\ANGULAR\Plague
	Clone

</details>

<details>
  <summary>Step 003: Create project in Destination Path</summary>
  
	[cmd  or VSCode]
	Go to yout directory <C:\athlas_tempo\Cursos\ANGULAR>
  ```
    ng new <project> --style=scss --routing --skip-tests --force
	ng new Plague --style=less --routing --skip-tests --force
    {...}
	CREATE Plague/src/environments/environment.prod.ts (51 bytes)
	CREATE Plague/src/environments/environment.ts (658 bytes)
	CREATE Plague/src/app/app-routing.module.ts (245 bytes)
	CREATE Plague/src/app/app.module.ts (393 bytes)
	CREATE Plague/src/app/app.component.html (23115 bytes)
	CREATE Plague/src/app/app.component.ts (211 bytes)
	CREATE Plague/src/app/app.component.less (0 bytes)
	✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
  ```

</details>

<details>
  <summary>Step 004: Use VSCode like IDE</summary>
  
	[VSCode]
	Open folder
	new terminal
	ng serve -o
	clean proyect -Delete all in app.component.html and put a simple <h 1>  OK.FUNCIONA
    Add this file StepByStep  
    Optional Config and plugin VS Code

</details>

<details>
  <summary>Step 005: GitFlow </summary>
  
	[SourceTree]
	Tag fist commit in main: "0.0.1"
	Create branch develop
	push branch
		
</details>

<details>
	  <summary>Step 006: VSCode - branch: develop - Install basics</summary>
</details>  
<details>
<summary>|----------: Install Angular Material </summary>
	  
		https://material.angular.io/guide/getting-started
    ng add @angular/material
    ? Choose a prebuilt theme name, or "custom" for a custom theme: Purple/Green
    ? Set up global Angular Material typography styles? No   
    ? Include the Angular animations module? Include and enable animations
    ng g m UI/shared/modules/material
    -- Edit share-material.module.ts
    import { MatToolbarModule } from '@angular/material/toolbar';
    @NgModule({
      exports: [
        MatToolbarModule
      ]
    -- Edit app.module.ts
    import { MaterialModule } from './UI/shared/modules/material/material.module';
    @NgModule({
      imports: [
        MaterialModule

</details>

<details>
	  <summary>|----------: Install flex-layout </summary>
		
    https://github.com/angular/flex-layout#angular-flex-layout
    Read!!--> https://tburleson-layouts-demos.firebaseapp.com/#/docs
		Install flex-layout
    npm i -s @angular/flex-layout @angular/cdk
    -- Edit share-material.module.ts
    import { FlexLayoutModule } from '@angular/flex-layout';
    @NgModule({
      imports: [
        FlexLayoutModule,

</details>
<details>
	  <summary>|----------: Install firebase|angularfire </summary>
		
    [firebase]
    https://console.firebase.google.com/
    follow: Agrega Firebase a tu aplicación web
    1. Registrar app
    2. Agrega el SDK de Firebase
    2.1. npm install firebase
    2.2. We NOT use SDK Javascrit. We use angularFire
    3. npm install -g firebase-tools
    4. Firebase Hosting
    4.1 firebase login
    [angularfire]
    https://github.com/angular/angularfire/blob/HEAD/docs/install-and-setup.md
		1. ng add @angular/fire
    2. export const environment = {  firebaseConfig: { ... } }
    3. restart for view the changes in app.module.ts
    3.1 Check if the install is ok
    |--  All I need id this. you can choose more 
    |--  // --Firebase
    |--  import { AngularFireModule } from '@angular/fire/compat';
    |--  import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  
    |--  AngularFireModule.initializeApp(environment.firebaseConfig),
    |--  AngularFirestoreModule,
			
</details>
<details>
	  <summary>|----------: Install auth-firebaseui </summary>
		
    [ngx-auth-firebaseui]
		read but not use https://ngx-auth-firebaseui.firebaseapp.com/getting-started only go to step 6
    npm install --save  ngx-auth-firebaseui --legacy-peer-deps
    npm install --save @angular-material-extensions/password-strength  --legacy-peer-deps
    copy to assets
    \node_modules\ngx-auth-firebaseui\assets\mdi
    \node_modules\ngx-auth-firebaseui\assets\user
    \node_modules\ngx-auth-firebaseui\assets\*.svgs
    for use guards in routing see https://github.com/AnthonyNahas/ngx-auth-firebaseui
    -- Edit app.module.ts
    import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
    @NgModule({
      imports: [
        NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),

</details>

<details>
	  <summary>|----------: Install Translations </summary>
		
		[ngx-translate]
    https://github.com/ngx-translate/core
    https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate
    npm install @ngx-translate/core @ngx-translate/http-loader      /*--  Important!!!   --legacy-peer-deps -*/

    -- Edit app.module.ts
    import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
    import {TranslateHttpLoader} from '@ngx-translate/http-loader';
    import {HttpClient, HttpClientModule} from '@angular/common/http';
    
    // required for AOT compilation
    export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
        return new TranslateHttpLoader(http);
    }

    imports: [
        // ngx-translate and the loader module
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],

    -- Edit app.module.ts
    import { TranslateService } from '@ngx-translate/core';
    currentLang: string = 'en';
    listLanguages = [
      { id: 'en', name: 'English' },
      { id: 'fr', name: 'French' },
      { id: 'ca', name: 'Catalan' },
      { id: 'es', name: 'Spanish' },
      { id: 'gl', name: 'Galician' }
    ];

    constructor(private translate: TranslateService) {
      this.IniTranslation();
    }
    IniTranslation() {
      this.translate.addLangs(this.listLanguages.map((l) => l.id));
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      this.currentLang = browserLang?.match(/en|fr|ca|es|gl/) ? browserLang : 'en';
      this.translate.use(this.currentLang);
    }

    -- Copy translations files to \src\assets\i18n
    |--\src\assets\i18n\es.json
    |--\src\assets\i18n\ all other .json
			
</details>	

<details>
  <summary>Step 008: First Screen Loading </summary>
  
	[VSCode- index.html]
	Put logo in <app-root></app-root> Then is show the logo when is loading
  ```
    <app-root>
      <div id="wrapper-logo">
        <div class="contenedor-center-logo">
          <img class="shadow10" src="../assets/logo/fondoLogo.svg" />
        </div>
        <div class="contenedor-center-logo anim-wait">
          <img src="../assets/logo/letraLogo.svg" />
        </div>
      </div>
    </app-root>

  -- Edit Styles.less or style.css
  /* <!-- styles to be able to display anim-logo in loading screen --> */
  #wrapper-logo {
    position: relative;
    height: 100%;
  }
  .contenedor-center-logo {
    position: fixed !important;
    left: 50% !important;
    margin-left: -100px;
    top: 50% !important;
    margin-top: -100px;
    width: 200px;
    z-index: 9000 !important;
  }
  .shadow10 {
    -webkit-filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.5));
  }
  .anim-wait {
    animation: anim-fadeinApp 0.7s ease infinite;
  }
  @keyframes anim-fadeinApp {
    from {
      opacity: 0;
      transform: rotateY(180deg);
    }
    to {
      opacity: 1;
      transform: rotateY(360deg);
    }
  }

  copy to assets
  /assets/logo/fondoLogo.svg
  assets/logo/letraLogo.svg

	```	
  ```

</details>
<details>
  <summary>Step 009: app.component.html | Layout </summary>
  
	[VSCode]
	  -- Edit share-material.module.ts
    import { MatButtonModule } from '@angular/material/button';
    import { MatIconModule } from '@angular/material/icon';
    import { MatSidenavModule } from '@angular/material/sidenav';
    import { MatToolbarModule } from '@angular/material/toolbar';
    @NgModule({
      exports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    -- Edit app.component.html
    https://material.angular.io/components/sidenav/examples
    https://material.angular.io/components/toolbar/examples
    ```
    <mat-sidenav-container fullscreen>
      <mat-sidenav #appsidenav mode="over" fxFlexFill>
        <mat-toolbar color="primary">                                  <!-- To component app.toolbar -->
          <button mat-icon-button (click)="appsidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <h1>{{ "App_Title" | translate }}</h1>
        </mat-toolbar>
        <h1>MENU</h1>                                                    <!-- To component app.menu -->
      </mat-sidenav>
      <mat-sidenav-content>
        <div fxLayout="column" fxFlexFill fxLayoutAlign="start center">
          <mat-toolbar color="primary">                                  <!-- To component app.toolbar -->
            <button mat-icon-button (click)="appsidenav.toggle()">
              <mat-icon>menu</mat-icon>
            </button>
            <h1>{{ "App_Title" | translate }}</h1>
          </mat-toolbar>
          <div fxFlex fxLayout="column" fxLayoutAlign="center center">    <!-- To <router-outlet></router-outlet> -->
            <h1>MAIN</h1>
          </div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
		```
</details>
<details>
  <summary>Step 010: SideBar Service</summary>
  
	  ng generate service UI/shared/services/sidenav
    -- Edit \src\app\UI\shared\services\sidenav.service.ts
		import { MatSidenav } from '@angular/material/sidenav';
    export class SidenavService {
      private sidenav!: MatSidenav;
      constructor() { }
      setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
      }
      open() {
        this.sidenav.open();
      }
      close() {
        this.sidenav.close();
      }
      toggle() {
        this.sidenav.toggle();
      }
      -- Edit app.component.ts  | Set SideNav service
      import { AfterViewInit, Component, ViewChild } from '@angular/core';
      import { MatSidenav } from '@angular/material/sidenav';
      export class AppComponent implements AfterViewInit {
      @ViewChild('appsidenav', { static: true }) public sidenav!: MatSidenav;
      constructor(..., private sidenavService: SidenavService) { }

      ngAfterViewInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
      }

</details>

<details>
  <summary>Step 11: Toolbar </summary>
  
	ng g component UI/dashboard/toolbar --skip-tests
  -- Edit toolbar.component.html  
  ```
  <mat-toolbar color="primary">
      <button mat-icon-button (click)="toggleAppSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <h1>{{ "App_Title" | translate }}</h1>
    </mat-toolbar>

  -- Edit toolbar.component.ts
  import { SidenavService } from 'src/app/UI/shared/services/sidenav.service';
  constructor(
    private sidenavService: SidenavService) { }
    
  toggleAppSidenav() {
    this.sidenavService.toggle();
  }
  ```
  -- Edit app.component.html
  ```
  <mat-sidenav-container fullscreen>
    <mat-sidenav #appsidenav mode="over" fxFlexFill>
      <app-toolbar></app-toolbar>
      <h1>MENU</h1>                                                    <!-- To component app.menu -->
    </mat-sidenav>
    <mat-sidenav-content>
      <div fxLayout="column" fxFlexFill fxLayoutAlign="start strech">
        <app-toolbar></app-toolbar>
        <div fxFlex fxLayout="column" fxLayoutAlign="center center">    <!-- To <router-outlet></router-outlet> -->
          <h1>MAIN</h1>
        </div>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
  ```
</details>

<details>
  <summary>Step 12: component app-logo </summary>
  
	ng g component UI/shared/components/logo  --skip-tests
	-- Edit \app\UI\shared\components\logo\logo.component.html
  ```
  <div class="contenedor-logo" aria-label="Toggle sidenav">
    <div class="contenedor-logo" ngClass.lt-sm="contenedor-logo-sm">
      <img class="shadow10" src="../assets/logo/fondoLogo.svg" />
    </div>
    <div class="contenedor-logo anim-in anim-hover" ngClass.lt-sm="contenedor-logo-sm">
      <img src="../assets/logo/letraLogo.svg" />
    </div>
  </div> 
  ```
  -- Edit \app\UI\shared\components\logo\logo.component.less
  ok... copy all
  -- Edit toolbar.component.html  
  ```
  <app-logo (click)="toggleAppSidenav()"></app-logo >
  <mat-toolbar color="primary" fxLayout="row" fxLayoutAlign="space-between center" >
    <div fxFlex fxFlexOffset="75px" fxLayout="row" fxLayoutAlign="center center"  >
      <span fxHide.lt-sm="true">
        {{ "App_Title" | translate }}
      </span>
    </div>
    <div>
        login
    </div>
  </mat-toolbar>
  ```

</details>
<details>
  <summary>Step 13: SideLayout Menu </summary>

    ng g component /UI/dashboard/menu --skip-tests
    ng g component /UI/dashboard/menu/levels --skip-tests
    ng g component /UI/dashboard/menu/ranking --skip-tests
    ng g component /UI/dashboard/menu/userConfig --skip-tests
    -- Edit src\app\UI\shared\modules\material\material.module.ts
    import { MatStepperModule } from '@angular/material/stepper';
    import { MatGridListModule } from '@angular/material/grid-list';  <-- use in level -->
    import { MatSlideToggleModule } from '@angular/material/slide-toggle';  <-- use in config -->
    import { MatListModule } from '@angular/material/list';
    -- Edit src\app\app.module.ts
    import { ReactiveFormsModule } from '@angular/forms';  <-- use in config -->
    imports: [
      ReactiveFormsModule,
    -- Edit src\app\UI\dashboard\menu\menu.component.html 
    ```
    <div fxFlex>
      <mat-stepper #stepper>
        <mat-step [label]="Levels"  [completed]="false">
          <app-levels fxFlex></app-levels>
        </mat-step>
        <mat-step [label]="Ranking" [completed]="false">
          <app-ranking fxFlex></app-ranking>
        </mat-step>
        <mat-step [label]="UserConfig" [completed]="false">
    -- Edit src\app\UI\dashboard\menu\levels\levels.component.html
    ```
    <div fxLayout="column" fxLayoutAlign="space-evenly stretch">
      <h3>{{"Dashboard.Menu.Levels.Choose" | translate  }}</h3>
        <mat-grid-list cols="7" rowHeight="5em" >
          <mat-grid-tile *ngFor="let tile of tilesLevel | async" [colspan]="tile.cols" >
          <div *ngIf="tile.title"> {{tile.title}}</div>
          <button  *ngIf="tile.iconButton" mat-fab color="primary" aria-label="xx" (click)="goToLevel(tile.action)">
            <mat-icon>{{tile.iconButton}}</mat-icon>
          </button>
          </mat-grid-tile>
        </mat-grid-list>
      <br><br><br>
      <button mat-button matStepperNext>Next</button>
    </div>
    -- Edit PROTOTYPE src\app\UI\dashboard\menu\ranking\ranking.component.html
    ```
    <div fxLayout="column" fxLayoutAlign="center center">
      <mat-icon aria-hidden="false" aria-label="trophy" fontIcon="military_tech"></mat-icon>
      <h2>You are the best!!</h2>
      <div>
        <br><br><br>
        <button mat-button matStepperPrevious>{{"App_Back" | translate}}</button>
        <button mat-button matStepperNext>{{"App_Next" | translate}}</button>
      </div>
    </div>
    -- Edit PROTOTYPE \src\app\UI\dashboard\menu\user-config\user-config.component.html
    ```
    <div fxLayout="column" fxLayoutAlign="center center">
      <h3>{{"Dashboard.Menu.UserConfig.Title" | translate  }}</h3>
      <form [formGroup]="configForm" fxLayout="column" fxLayoutAlign="center center" (ngSubmit)="saveChanges()">
        <mat-slide-toggle formControlName="config01">Option 01</mat-slide-toggle>
        <mat-slide-toggle formControlName="config02">Option 02</mat-slide-toggle>
        <mat-slide-toggle formControlName="config03">Option 03</mat-slide-toggle>
        <mat-slide-toggle formControlName="config04">Option 04</mat-slide-toggle>
        <br>
        <button mat-rasied-button type="submit" [disabled]="configForm.pristine">Save Settings</button>
      </form>
      <h3>{{"Dashboard.Menu.UserConfig.SelectLanguage" | translate  }}</h3>
      <mat-nav-list>
        <mat-list-item *ngFor="let lang of listLanguages" [class.activated]="lang == currentLang" (click)="changeLanguage(lang)">
          {{ 'App.Languages.'+ lang | translate }}
          <p class="spacer">&nbsp;</p>
          <mat-icon *ngIf="lang == currentLang">radio_button_checked</mat-icon>
          <mat-icon *ngIf="lang != currentLang">radio_button_unchecked</mat-icon>
        </mat-list-item>
      </mat-nav-list>
      <div>
        <br><br><br>
        <button mat-button matStepperPrevious>{{"App_Back" | translate}}</button>
      </div>
      </div>
    -- Edit PROTOTYPE \src\app\UI\dashboard\menu\user-config\user-config.component.ts
    ```
    import { FormBuilder, FormGroup } from '@angular/forms';
    import { TranslateService } from '@ngx-translate/core';
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
</details>
<details>
  <summary>Step 0: MainLayout Game </summary>
  Create lazy module 
  ng g m game --flat --routing  
	ng g component game --skip-tests
		
</details>

<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g class /domain/model  --skip-tests
	ng g class /domain/gateway  --skip-te
	ng g service /domain/usecase  --skip-tests	sts	


  ng g service /infraestructure/driven-adapters/firebase-provider  --skip-tests
  ng g service /infraestructure/driven-adapters/hardcode-provider  --skip-tests



</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary>Step 0: xxxxx </summary>
  
	ng g component xxxx --skip-tests
		
</details>
<details>
  <summary> Tricks: xxxxx </summary>
  
  [npm ERR! peer]:
  1. use --legacy-peer-deps
  2. ng update

	[tab Terminal whith ng serve]
  1. control+C  and  ng serve

	[tab Problem  ¿? ilogic ]
  1. close VSCode and open
		
</details>
