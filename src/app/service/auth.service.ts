import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../interface/register';
import { UserInicio } from '../UserInicio';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sharingObservablePrivate: BehaviorSubject<Correo> = new BehaviorSubject<Correo>({email:""});

   get sharingObservable(){
    return this.sharingObservablePrivate.asObservable();
   }
   set sharingObservableData(email:Correo){
    this.sharingObservablePrivate.next(email);
   }
   
  emailD="";
  userInicio:UserInicio [] = []
  constructor(private http:HttpClient) { }


  login(Email:string, Password:string):Observable<any>{
    return this.http.post<any>(environment.apiUrl + "/login", {
      Email, Password
    });
  }

  getUser(email:string): Observable<any>{
   
    return this.http.get<any>(environment.apiUrl + "/user/"+email);
    }

  auth(): Observable<boolean>{
    let token: any;
    if(typeof localStorage !== "undefined"){
      token = localStorage.token ? localStorage.token : "";
    }
    return this.http.post<boolean>(environment.apiUrl + "/user/auth", {
      token
    });
  }

}

export interface Correo{
  email:string
}