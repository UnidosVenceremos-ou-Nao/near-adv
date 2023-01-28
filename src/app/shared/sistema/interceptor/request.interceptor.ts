import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SecurityService } from '../../../security/services/security.service';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let a = this.securityService.getToken().pipe((data: any) => {
      return data;
    });
    if (true) {
      let token = this.securityService.getToken();
      let headers = request.headers.set('Content-Type', 'application/json');

      let requestClone = request.clone({
        headers: headers,
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (request.url.includes('/help/signup')) {
        requestClone = request.clone({
          headers: headers,
        });
      }

      return next.handle(requestClone).pipe(
        catchError((error) => {
          if (error.status === 401 || error.status === 410) {
            this.securityService.removeToken();
            this.router.navigate(['auth/login']);
          }

          return throwError(error.error.error);
        })
      );
    }
    return next.handle(request);
  }
}
