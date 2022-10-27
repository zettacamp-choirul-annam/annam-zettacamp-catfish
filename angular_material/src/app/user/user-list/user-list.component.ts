import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Component({
      selector: 'app-user-list',
      templateUrl: './user-list.component.html',
      styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
      subcription!: Subscription;
      users: User[] = [];

      constructor(private userService: UserService) { }

      ngOnInit(): void {
            this.subcription = this.userService.users$
                  .subscribe(users => this.users = users);
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }
}
