import { SecurityService } from './../services/security.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserFirebase } from 'src/app/shared/sistema/interface/userFirebase';
@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate {
  token: any = '';
  userFirebase: UserFirebase = new UserFirebase();

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
    this.token = this.securityService.getToken();
    this.userFirebase = this.securityService.getFirebaseUser();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.token &&
      new Date(this.userFirebase.stsTokenManager.expirationTime) > new Date()
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
