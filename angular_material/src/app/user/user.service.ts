import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      private userSource = new BehaviorSubject<User[]>([]);
      user = this.userSource.asObservable();

      constructor(private http: HttpClient) {
            this.fetchUsers().subscribe(resp => {
                  this.userSource.next(resp.users);
            });
      }

      fetchUsers() {
            return this.http.get<any>('../../assets/static/users.json');
      }

      getUsers(): User[] {
            return this.userSource.getValue();
      }

      addUser(user: any) {
            const users = this.getUsers();
            users.push(user);

            this.userSource.next(users);
      }

      updateUser(user: any) {
            const users = this.getUsers().map(u => {
                  return (u.id_number === user.id_number) ? user : u;
            });

            this.userSource.next(users);
      }
}
