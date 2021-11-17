import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { RegistroTO } from '../../interfaces/registroto.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url:String = "http://127.0.0.1:1400/api/registro";

  constructor(private _http: HttpClient) { }

  listarRegistro(): Observable<RegistroTO[]> {
    return this._http.get<RegistroTO[]>(this.url);
  }

  guardar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.post<RegistroTO>(this.url, registro);
  }

  actualizar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.put<RegistroTO>(this.url, registro);
  }

  eliminar(id: String) : Observable<String> {
    return this._http.delete<String>(this.url + "/" + id);
  }

}
