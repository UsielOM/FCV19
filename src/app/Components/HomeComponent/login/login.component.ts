import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService, Correo } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   data$: Observable<Correo> ;
  constructor(private authService:AuthService, private router: Router,  ) {
    this.data$ = authService.sharingObservable;
   }


   user: User = new User();
   bandera = false;
  errorMessage = "";
  ngOnInit(): void {
  }
  login(emailR:string){
    this.authService.sharingObservableData={email: emailR};

    this.authService.login(this.user.Email, this.user.Password).subscribe(
      result => {
     if(typeof localStorage !== "undefined"){
      localStorage.setItem("token", result.token);
     }
    
     this.router.navigate(["User"])
    },
    error =>{
      
      this.errorMessage="Username or password is wrong";
    }
    );
  }



}
