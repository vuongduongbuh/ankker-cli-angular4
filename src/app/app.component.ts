import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

//ngRx Store
import { Store } from '@ngrx/store';
import * as fromRoot from './store/index';
import * as auth from './store/auth/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  constructor(private store: Store<fromRoot.AppState>, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authService.handleAuthentication();
    this._registerRouterEvent();
  }

  _registerRouterEvent() {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        if (this.activatedRoute.snapshot.firstChild.data['requiredAuth'] && !this.authService.isAuthenticated()) {
          this.store.dispatch(new auth.Login(1));
        }
      })
  }
}
