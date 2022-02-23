import { Injectable } from '@angular/core';
import { User } from './models/user';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      email: 'kjerfngu@fdhu.com',
      id: 1,
      name: 'carlo',
      type: 'user',
    },
    {
      email: 'ggffngu@fhgu.de',
      id: 2,
      name: 'genoveffa',
      type: 'admin',
    }
  ];
  constructor() { }

  getUsers() {
    return this.users
  }

  getUser(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
