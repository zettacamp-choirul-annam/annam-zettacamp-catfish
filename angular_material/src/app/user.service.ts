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

            user.id = this.findBiggestId(users) + 1;
            users.push(user);

            this.users.next(users);
      }

      editUser(user: User) {
            let users = this.getUsers();

            users = users.map(u => {
                  return u.id == user.id ? user : u;
            });

            this.users.next(users);
      }

      private findBiggestId(users: User[]): number {
            const ids = users.map(user => user.id);
            const biggest = ids.length == 0 ? 0 : Math.max(...ids);

            return biggest;
      }
}
