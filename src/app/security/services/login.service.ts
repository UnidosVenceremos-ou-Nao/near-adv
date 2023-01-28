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
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public usuarioLogadoService: SecurityService
  ) {
    this.afAuth.authState.subscribe((user: any) => {
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
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.SetUserData(result.user);

        this.afAuth.authState.subscribe((user) => {
          if (user) {
            result.user
              ?.getIdToken()
              .then((tokenResult) => {
                this.usuarioLogadoService.setToken(tokenResult);
                this.getInfo(user.uid, tokenResult).subscribe({
                  next: (res: ApiReturn) => {
                    this.usuarioLogadoService.setUsuario(res.return);
                    this.router.navigate(['/inicio']);
                  },
                  error: (error: any) => {
                    console.error(error);
                  },
                });
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
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getInfo(uid: string, token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}/${uid}`, { headers: headers });
  }

  signUp(usuario: NovoUsuario) {
    this.afAuth
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((data) => {
        this.SendVerificationMail();
        usuario.uid = data.user!.uid;
        this.http.post(`${this.baseUrl}/help/signup`, usuario).subscribe(
          (x) => {
            console.log(x);
          },
          (e) => {
            console.log(e);
          }
        );
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  forgotPassword(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then((result) => {})
      .catch((error) => {
        window.alert(error.message);
      });
  }

  changePassword(newPassword: string) {
    return this.afAuth.currentUser.then((user) => {
      user?.updatePassword(newPassword);
    });
  }
}
