import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';



/*Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS 
* for gestures. In order to get the full feature-set of these components, HammerJS
* must be loaded into the application.
* npm install --save hammerjs
*/

/* our components */
import { AppComponent } from './app.component';
import { BannerComponent } from './top/banner/banner.component';
import { SideNavComponent } from './left-side/side-nav/side-nav.component';
import { ToolbarMenuComponent } from './top/toolbar-menu/toolbar-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavComponent,
    ToolbarMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
