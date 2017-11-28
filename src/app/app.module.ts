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
          MatTabsModule,
          MatSnackBarModule,
          MatRadioModule,
          MatCheckboxModule,
          MatTooltipModule
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
import { SnackBarComponent } from './components/catalogue-jeux/snack-bar/snack-bar.component';
import { DialogueJeuxComponent } from './components/catalogue-jeux/dialogue-jeux/dialogue-jeux.component';
import { UserFormComponent } from './components/block-login/user-form/user-form.component';
import { LoginAndSubscribeComponent } from './components/block-login/login-and-subscribe/login-and-subscribe.component';
import { UserFormSubscribeComponent } from './components/block-login/user-form-subscribe/user-form-subscribe.component';
import { Searchbv3Component } from './components/searchbv3/searchbv3.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SubsFormComponent } from './components/subs-form/subs-form.component';
import { BotComponent } from './components/bot/bot.component';
import { ArticleComponent } from './components/article/article.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FilActualiteComponent } from './components/fil-actualite/fil-actualite.component';
import { GlobalNewsComponent } from './components/fil-actualite/global-news/global-news.component';
import { PersonnalWallComponent } from './components/fil-actualite/personnal-wall/personnal-wall.component';
import { UserParamComponent } from './components/user-param/user-param.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { UserRessultComponent } from './components/search-results/user-ressult/user-ressult.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';

/* Services */
import { LoginService } from './services/login.service';
import { SearchBarService } from './services/search-bar.service';
/* Authguard */
import { AuthguardGuard } from './authGuard/authguard.guard';

/* Routages des composants */
// créer un module routing.module
const appRoutes: Routes = [
  // redirection vers par défaut vers actualités générales.
  { path: '', redirectTo: 'actualites/generales', pathMatch: 'full'},
  { path: 'login', component: LoginAndSubscribeComponent },
  { path: 'actualites', component: FilActualiteComponent,
    canActivateChild: [AuthguardGuard],
    children: [
      { path: 'generales', component: GlobalNewsComponent },
      { path: 'personnelles', component: PersonnalWallComponent },
    ]
  },
  { path: 'catalogue', component: CatalogueJeuxComponent },
  { path: 'groupes', component: UserGroupsComponent },
  { path: 'parametres', component: UserParamComponent, canActivate: [AuthguardGuard] },
  { path: 'rechercher', component: SearchResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavComponent,
    ToolbarMenuComponent,
    PersonnalGamelistComponent,
    CatalogueJeuxComponent,
    SnackBarComponent,
    UserFormComponent,
    LoginAndSubscribeComponent,
    UserFormSubscribeComponent,
    SearchbarComponent,
    Searchbv3Component,
    SubsFormComponent,
    BotComponent,
    ArticleComponent,
    DialogueJeuxComponent,
    FriendListComponent,
    FilActualiteComponent,
    GlobalNewsComponent,
    PersonnalWallComponent,
    UserParamComponent,
    SearchResultsComponent,
    UserRessultComponent,
    UserGroupsComponent,
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
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [ DialogueJeuxComponent ],
  providers: [ LoginService, SearchBarService, AuthguardGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
