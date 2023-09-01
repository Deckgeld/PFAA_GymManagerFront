import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadUsersAction } from 'src/state/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PF_GymManagerFront';

  constructor(private store:Store) { 
    store.dispatch(new LoadUsersAction());
  }
}
