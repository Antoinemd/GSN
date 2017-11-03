/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';


/* Material Design */
import {  MatSidenavModule,
          MatToolbarModule,
          MatButtonModule,
          MatMenuModule,
          MatIconModule,
          MatGridListModule,
          MatGridList,
          MatSelectModule,
          MatAutocompleteModule,
          MatSlideToggleModule,
          MatInputModule,
          MatFormFieldControl,
          MatDialogModule,
          MatCardModule,
           } from '@angular/material';


/*Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS
* for gestures. In order to get the full feature-set of these components, HammerJS
* must be loaded into the application.
* npm install --save hammerjs
*/

/* Composants */
import { AppComponent } from './app.component';
import { BannerComponent } from './components/top/banner/banner.component';
import { ToolbarMenuComponent } from './components/top/toolbar-menu/toolbar-menu.component';
import { SideNavComponent } from './components/left-side/side-nav/side-nav.component';
import { PersonnalGamelistComponent } from './components/left-side/personnal-gamelist/personnal-gamelist.component';
import { CatalogueJeuxComponent } from './components/catalogue-jeux/catalogue-jeux.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { Searchbv3Component } from './components/searchbv3/searchbv3.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SubsFormComponent } from './components/subs-form/subs-form.component';
import { BotComponent } from './components/bot/bot.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavComponent,
    ToolbarMenuComponent,
    PersonnalGamelistComponent,
    CatalogueJeuxComponent,
    UserFormComponent,
    SearchbarComponent,
    Searchbv3Component,
    SubsFormComponent,
    BotComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
