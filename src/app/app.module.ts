import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import layouts
import { AppComponent } from './app.component';
import { AppHeader } from './layouts/header/header';
import { AppContent } from './layouts/content/content';

//Import modules
import { AppHome } from './modules/home/home';
import { AppFeed } from './modules/feed/feed';
import { AppSearch } from './modules/search/search';

//Import comonents
import { AkFeedComponent } from './components/feed/feed';

const appRoutes: Routes = [
  { path: '', component: AppHome },
  { path: 'feed', component: AppFeed },
  { path: 'search', component: AppSearch }
];

@NgModule({
  declarations: [
    //Import layouts
    AppComponent,
    AppHeader,
    AppContent,

    //Import modules
    AppHome,
    AppFeed,
    AppSearch,

    //Import components
    AkFeedComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
