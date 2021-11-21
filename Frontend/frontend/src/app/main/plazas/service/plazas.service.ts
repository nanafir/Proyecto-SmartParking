import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { PlazasTO } from '../../interfaces/plazasto.interface';


@Injectable({
  providedIn: 'root'
})
export class PlazasService {

  constructor(private _http: HttpClient) { }

  listarPlazas(): Observable<PlazasTO[]> {
    return this._http.get<PlazasTO[]>("http://127.0.0.1:1400/api/plazas");
  }
}
