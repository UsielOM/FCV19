import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login("lesli@tiktok.com","raymundolove56").subscribe(result => {
      console.log(result);
    },
    error =>{
      console.log(error);
      console.log("Username or password is wrong");
    }
    );
  }

}
