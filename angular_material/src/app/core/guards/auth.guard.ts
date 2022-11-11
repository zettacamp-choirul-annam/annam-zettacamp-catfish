import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../firebase/auth.service';
import { Router } from '@angular/router';

@Injectable({
      providedIn: 'root'
})
export class AuthGuard implements CanActivate {
      constructor(
            private authService: AuthService,
            private router: Router
      ) { }
      
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            const user = this.authService.getCurrentUser();
            
            if (user != null) {
                  return true;
            }

            return this.router.navigate(['/auth']);
      }
}
