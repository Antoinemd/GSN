import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/*Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS 
* for gestures. In order to get the full feature-set of these components, HammerJS
* must be loaded into the application.
* npm install --save hammerjs
*/

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
