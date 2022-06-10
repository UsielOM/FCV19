import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(Email:string, Password:string):Observable<any>{
    return this.http.post<any>(environment.apiUrl + "/login", {
      Email, Password
    });
  }
}