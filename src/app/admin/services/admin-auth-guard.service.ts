import { UserService } from 'shared/services/account/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'shared/services/account/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  canActivate()  {
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
