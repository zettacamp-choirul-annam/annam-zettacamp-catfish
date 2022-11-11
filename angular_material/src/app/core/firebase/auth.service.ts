import { Injectable } from '@angular/core';
import { app } from './app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class AuthService {
      private auth = getAuth(app);

      constructor() { }

      login(email: string, password: string) {
            const promises = signInWithEmailAndPassword(this.auth, email, password);
            return from(promises);
      }

      logout() {
            const promises = signOut(this.auth);
            return from(promises);
      }
 
      getCurrentUser() {
            return this.auth.currentUser;
      }
}
