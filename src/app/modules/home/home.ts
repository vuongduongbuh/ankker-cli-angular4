import { Component } from '@angular/core';
//Import store
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import * as auth from '../../store/auth/auth.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class AppHome {
  constructor(private store: Store<fromRoot.AppState>) {
    
  }

  login() {
    this.store.dispatch(new auth.Login(1));
  }
}
