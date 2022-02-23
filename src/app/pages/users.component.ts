import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users.service';

@Component({
  template: `
    <ul class="list-group">
      <li
        [routerLink]="[user.id]"
        routerLinkActive="active"
        class="list-group-item"
        *ngFor="let user of users; let i = index"
      >
        {{ user.name }}
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}
  users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
}
