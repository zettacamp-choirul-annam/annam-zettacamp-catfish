import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
      selector: 'app-user-list',
      templateUrl: './user-list.component.html',
      styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
      subcription?: Subscription;
      users: User[] = [];

      constructor(
            private route: Router,
            private userService: UserService
      ) { }

      ngOnInit(): void {
            this.subcription = this.userService.user.subscribe(users => {
                  this.users = users;
            });
      }

      goToCreation() {
            this.route.navigate(['/creation']);
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }
}
