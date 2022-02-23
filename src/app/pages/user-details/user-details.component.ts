import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users.service';


@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  constructor(private users: UsersService, private router: ActivatedRoute) {}
  id!: number
  utente: User |undefined

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = +params["id"];
      this.utente = this.users.getUser(this.id);
      console.log(this.utente);
    })
  }
}
