import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ParametrosTO } from '../../interfaces/parametrosto.interface';


@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  url: string = "https://smartparkingbackangelica.herokuapp.com/api/parametros"

  constructor(private _http: HttpClient) { }
  listarParametros(): Observable<ParametrosTO[]> {
    return this._http.get<ParametrosTO[]>(this.url);
  }

  actualizar(parametro: ParametrosTO) : Observable<ParametrosTO> {
    return this._http.put<ParametrosTO>(this.url, parametro);
  }
}
