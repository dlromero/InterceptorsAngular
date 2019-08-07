import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const heds = new HttpHeaders({
      'token-usuarios': 'ADADSFDFDSD564564564564'
    });

    const reqClone = req.clone({ headers: heds });

    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }

  manejarError(error: HttpErrorResponse) {
    console.warn(error);
    return throwError('Error personalizado');
  }
}
