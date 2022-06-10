import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  user: User = new User();
  errorMessage = "";
  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.user.Email, this.user.Password).subscribe(result => {
      console.log(result);
    },
    error =>{
      
      this.errorMessage="Username or password is wrong";
    }
    );
  }

}
