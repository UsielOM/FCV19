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

  getHeaders():HttpHeaders{
    let token: string;
    if(typeof localStorage !== "undefined"){
       
    token = localStorage.token;
    }
    const headers:HttpHeaders = new HttpHeaders({
     Authorization: token!
    })
    return headers;
  }

  login(Email:string, Password:string):Observable<any>{
    return this.http.post<any>(environment.apiUrl + "/login", {
      Email, Password
    });
  }

  getUser(email:string): Observable<any>{
   
    return this.http.get<any>(environment.apiUrl + "/user/"+email,  {headers: this.getHeaders()});
    }



}

export interface Correo{
  email:string
}