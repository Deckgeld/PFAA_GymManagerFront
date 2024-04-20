import { User } from "src/app/core/interfaces/user";

export class AddUserAction {
  static readonly type = '[UsersState] Add item';
  constructor(public payload: User) { }
}

export class LoadUsersAction {
  static readonly type = '[UsersState] Load items';
}

export class UpdateUserAction {
  static readonly type = '[UsersState] Update item';
  constructor(public payload: User) { }
}

export class DeleteUserAction {
  static readonly type = '[UsersState] Delete item';
  constructor(public payload: User) { }
}