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
import { PersonnalNewsComponent } from './components/fil-actualite/personnal-news/personnal-news.component';

/* Services */
import { LoginService } from './services/login.service';
/* Authguard */
import { AuthguardGuard } from './authGuard/authguard.guard';

/* Routages des composants */
const appRoutes:Routes = [
  // {
  //   path:'accueil',
  //   component: LoginAndSubscribeComponent
  // },
  {
    path:'login',
    component: LoginAndSubscribeComponent
  },
  {
    path:'actualites',
    component: FilActualiteComponent
  }
  // {
  //   path:'friendList',
  //   canActivate:[AuthguardGuard],
  //   component: FriendListComponent
  // },
  //  pour le test on met le composant feeds

]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavComponent,
    ToolbarMenuComponent,
    PersonnalGamelistComponent,
    CatalogueJeuxComponent,
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
    PersonnalNewsComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [ DialogueJeuxComponent ],
  providers: [LoginService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
