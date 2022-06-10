import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Correo } from '../../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  
  emailC="";
  extractor:any;
  constructor(private router: Router, private authService:AuthService) {

   }
  user(){
    this.extractor=  this.authService.sharingObservable;
    this.emailC=this.extractor.source._value.email;
    this.authService.sharingObservableData={email: this.emailC};
    this.router.navigate(["User"])
  }
  perfil(){
    this.extractor=  this.authService.sharingObservable;
    this.emailC=this.extractor.source._value.email;
    this.authService.sharingObservableData={email: this.emailC};
    this.router.navigate(["/User/perfil"])
  }

  ngOnInit(): void {


  }

  
}
