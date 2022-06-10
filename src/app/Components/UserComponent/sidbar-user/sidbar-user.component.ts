import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserInicio } from '../../../UserInicio';
import { Observable } from 'rxjs';
import { Correo } from '../../../service/auth.service';


@Component({
  selector: 'app-sidbar-user',
  templateUrl: './sidbar-user.component.html',
  styleUrls: ['./sidbar-user.component.css']
})
export class SidbarUserComponent implements OnInit {
  userInicio: UserInicio [] = []; 
   data$: Observable<Correo> ;
    conversion:any;
    prueba="";
   contendor1 ="";
  constructor(private activateRoute: ActivatedRoute, private authService:AuthService) { 
   
  this.data$= authService.sharingObservable;
  this.conversion=  this.authService.sharingObservable;
  this.prueba=this.conversion.source._value.email;

  if(this.contendor1 != this.prueba){
    this.contendor1=this.prueba
    this.authService.sharingObservableData={email: this.contendor1};
    console.log("HOLA KEVIN")
  }else{
    this.prueba=this.contendor1
    console.log("HOLA BOBESPONJA")
  }
    
  }
  
  ngOnInit(): void {
  
      console.log(this.contendor1);
      this.authService.getUser(this.contendor1).subscribe(res =>{
      this.userInicio.push(res);
    })

  }

}
