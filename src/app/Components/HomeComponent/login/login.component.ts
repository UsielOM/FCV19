import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

   user: User = new User();
 
  errorMessage = "";
  ngOnInit(): void {
  }
  login(email:string){
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
