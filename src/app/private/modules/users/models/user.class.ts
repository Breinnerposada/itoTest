
export class User {

  id: number;
  email: string;
  user: string;
  firstName: string;
  lastName: string;
  active: boolean;

  constructor(user: User) {

    this.id = Date.now();
    this.email = user.email;
    this.user = user.user;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.active = user.active;
  }
}
