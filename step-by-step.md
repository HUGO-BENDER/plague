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
    ng g m share/modules/shareMaterial
    -- Edit share-material.module.ts
    import { MatToolbarModule } from '@angular/material/toolbar';
    @NgModule({
      declarations: [],
      imports: [
        MatToolbarModule
      ]
    -- Edit app.module.ts
    import { ShareMaterialModule } from './share/modules/share-material/share-material.module';
    @NgModule({
      imports: [
        ShareMaterialModule

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
		https://ngx-auth-firebaseui.firebaseapp.com/getting-started
    



</details>

<details>
	  <summary>|----------: Install Translations </summary>
		
			xxxxxxxxxxxxxxxxxxxxxxx
			
</details>	


<details>
  <summary>Step 007: xxxxx </summary>
  
	[xxxx]
	
		xxxxxxxxxxxxxxxxxxxxxxx
		
		xxxxxxxxxxxxxxxxxxxxxxx
		
		xxxxxxxxxxxxxxxxxxxxxxx
		
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
