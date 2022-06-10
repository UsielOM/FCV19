import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../interface/register';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  createRegistro(regis:Register): Observable<Register>{
    return this.http.post<Register>( "http://localhost:3000/registrar/",regis
    );
  }
}
