import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHome } from './modules/home/home';

//Import layouts
import { AppHeader } from './layouts/header/header';
import { AppContent } from './layouts/content/content';

//Import modules
import { } from './modules'

//Import comonents
import { AkFeedComponent  } from './components/feed/feed';

// const appRoutes: Routes = [
//   { path: '/feed', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AppHome,
    
    //Import components
    AkFeedComponent
    
  ],
  imports: [
    BrowserModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
