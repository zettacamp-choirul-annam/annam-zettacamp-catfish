import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      constructor(private http: HttpClient) { }

      getData() {
            return this.http.get<User[]>('../assets/mentor.json')
                  // .pipe(catchError(()=> []));
                  .pipe(catchError(error => throwError(error)));
      }
}
