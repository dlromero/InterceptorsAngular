import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    let parameters = new HttpParams().append('page', '1');
    parameters = parameters.append('page', '2');

    return this.http
      .get('https://reqres.in/api/user', {
        params: parameters
      })
      .pipe(map((resp: any) => resp.data));
  }


}
