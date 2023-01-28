import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Utils from 'src/app/shared/sistema/utils/utils';
import { environment } from 'src/environments/environment';
import { ApiReturn } from '../interfaces/apiReturn';
import { FirebaseUser, NovoUsuario } from '../interfaces/firebaseuser';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.url;
  userData: any;
  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public usuarioLogadoService: SecurityService
  ) {
    this.angularFireAuth.authState.subscribe((user: any) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.SetUserData(result.user);

        this.angularFireAuth.authState.subscribe((user) => {
          if (user) {
            result.user
              ?.getIdToken()
              .then((tokenResult) => {
                this.usuarioLogadoService.setToken(tokenResult);
                this.router.navigate(['/inicio']);
              })
              .catch((error) => {
                window.alert(Utils.obterStatusRetorno(error.message));
              });
          }
        });
      })
      .catch((error) => {
        window.alert(Utils.obterStatusRetorno(error.message));
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: FirebaseUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getInfo(uid: string, token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}/auth/${uid}`, { headers: headers });
  }

  signUp(usuario: NovoUsuario) {
    return this.http.post(`${this.baseUrl}/auth/help/sign-up`, usuario);
  }

  sendEmailValidation(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.angularFireAuth.currentUser.then((user) => {
          user?.sendEmailVerification();
          this.SignOut();
        });
      });
  }

  forgotPassword(email: string) {
    return this.angularFireAuth
      .sendPasswordResetEmail(email)
      .then((result) => {})
      .catch((error) => {
        window.alert(error.message);
      });
  }

  changePassword(newPassword: string) {
    return this.angularFireAuth.currentUser.then((user) => {
      user?.updatePassword(newPassword);
    });
  }
}
