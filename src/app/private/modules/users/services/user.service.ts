import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.class';

const felipe = {
  id: 0,
  email: 'felipe@gmail.com',
  active: true,
  firstName: 'Felipe',
  lastName: 'Posada',
  user: 'Felipe_Posada',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([new User(felipe)]);
  listUser = this.usersSubject.asObservable();

  @Output() searchUser: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  create(user: User) {
    this.usersSubject.next([...this.usersSubject.getValue(), user]);
  }

  update(userEdit: User) {
    const users = this.usersSubject.getValue();
    const indexUser = users.findIndex((user) => user.id === userEdit.id);
    users.splice(indexUser, 1, userEdit);
    this.usersSubject.next([...users]);
  }

}
