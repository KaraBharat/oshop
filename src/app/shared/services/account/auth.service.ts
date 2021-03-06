import { UserService } from './user.service';
import { AppUser } from 'shared/models/app.user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$ : Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute, 
    private router : Router,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  login() {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() {
    this.afAuth.auth.signOut()
    .then(success => {
      this.router.navigate(['/']);
    });
  }

  get appUser$(): Observable<AppUser>{
    return this.user$
    .switchMap(user => {
      if(user) {
        return this.userService.get(user.uid)
      }
      else{
        return Observable.of(null);
      }
    })
  }
}
