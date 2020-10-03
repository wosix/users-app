import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UsersService
  ) { }

  public users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user: User[]) => {
      this.users = user;
      console.log(user);
    })
  }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
}
