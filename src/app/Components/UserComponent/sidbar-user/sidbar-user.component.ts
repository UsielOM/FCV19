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

  constructor(private activateRoute: ActivatedRoute, private authService:AuthService) { 
   
  this.data$= authService.sharingObservable;
  this.conversion=  this.authService.sharingObservable;
  this.prueba=this.conversion.source._value.email;
  }
  
  ngOnInit(): void {
     
      this.authService.getUser(this.prueba).subscribe(res =>{
      this.userInicio.push(res);
    })

  }

}
