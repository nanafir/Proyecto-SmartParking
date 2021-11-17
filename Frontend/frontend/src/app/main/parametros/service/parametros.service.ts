import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ParametrosTO } from '../../interfaces/parametrosto.interface';


@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private _http: HttpClient) { }
  listarParametros(): Observable<ParametrosTO[]> {
    return this._http.get<ParametrosTO[]>("http://127.0.0.1:1400/api/parametros");
  }
}
