import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError } from 'rxjs';

import { User } from './models/user.model';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      private users = new BehaviorSubject<User[]>([]);
      users$ = this.users.asObservable();

      constructor(private http: HttpClient) {
            this.initializeUsers();
      }

      private initializeUsers() {
            this.fetchUsers()
                  .pipe(catchError(() => []))
                  .subscribe(response => this.users.next(response.users));
      }

      private fetchUsers() {
            return this.http.get<any>('../../assets/static/users.json');
      }

      getUsers(): User[] {
            return this.users.getValue();
      }

      addUser(user: any) {
            const users = this.getUsers();
            users.push(user);

            this.users.next(users);
      }

      updateUser(user: any) {
            const users = this.getUsers().map(u => {
                  return (u.id === user.id) ? user : u;
            });

            this.users.next(users);
      }
} 
