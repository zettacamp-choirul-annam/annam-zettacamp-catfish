import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      private users = new BehaviorSubject<User[]>([]);
      users$ = this.users.asObservable();

      constructor() { }

      getUsers(): User[] {
            return this.users.getValue();
      }

      addUser(user: User) {
            const users = this.getUsers();
            users.push(user);

            this.users.next(users);
      }
}
