// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// --Modules in App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareMaterialModule } from './share/modules/share-material/share-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ShareMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
