import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

//Import ngRx Store
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducer } from './store/index';

//Import services 
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';

//Factories
import { httpFactory } from './services/http.factory';

//Import layouts
import { App } from './app.component';
import { AppHeader } from './layouts/header/header';
import { AppContent } from './layouts/content/content';

//Import modules
import { AppHome } from './modules/home/home';
import { AppFeed } from './modules/feed/feed';
import { AppSearch } from './modules/search/search';

//Import comonents
import { AkFeedComponent } from './components/feed/feed';
import { AkFeedCreateComponent } from './components/feed/create/create';

const appRoutes: Routes = [
  { path: '', component: AppHome },
  { path: 'feed', component: AppFeed },
  { path: 'search', component: AppSearch }
];

@NgModule({
  declarations: [
    //Import layouts
    App,
    AppHeader,
    AppContent,

    //Import modules
    AppHome,
    AppFeed,
    AppSearch,

    //Import components
    AkFeedComponent,
    AkFeedCreateComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(reducer)
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
