import { Injectable } from '@angular/core';
import { State, Action, StateContext, Select } from '@ngxs/store';
import { AccountService } from 'src/app/core/services/account.service';
import { userDto } from 'src/app/core/interfaces/user';
import { UsersService } from 'src/app/core/services/users.service';
import { AddUserAction, LoadUsersAction } from './users.actions';
import { ResponseArrayModel } from 'src/app/core/interfaces/response-models';
import { tap } from 'rxjs';

export class UsersStateModel {
  public users!: userDto[];
}

const defaults = {
  users: []
};

@State<UsersStateModel>({
  name: 'StateUsers',
  defaults
})

@Injectable()
export class UsersState {

  constructor(private usersService:UsersService) { }

  @Select()
  public static getUsers({ users }: UsersStateModel): userDto[]{
    return users
  }
  
  @Action(AddUserAction)
  addUser({ getState, setState }: StateContext<UsersStateModel>, { payload }: AddUserAction) {
    const state = getState();
    setState({ users: [ ...state.users, payload ] });
  }

  @Action(LoadUsersAction)
  loadUsers({ setState }: StateContext<UsersStateModel>): LoadUsersAction{
    return this.usersService.getUsers().pipe(
      tap((response: ResponseArrayModel<userDto>) => {
        const users = response.model;
        setState({ users });
      })
    );
  }
}