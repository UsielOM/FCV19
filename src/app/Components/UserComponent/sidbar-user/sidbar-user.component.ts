import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserInicio } from '../../../UserInicio';

@Component({
  selector: 'app-sidbar-user',
  templateUrl: './sidbar-user.component.html',
  styleUrls: ['./sidbar-user.component.css']
})
export class SidbarUserComponent implements OnInit {
 
   
  
  constructor() { }

  ngOnInit(): void {
  
  // this.activateRoute.params.subscribe(params =>{
  //   this.email = params['email'];
  //   this.authService.getUser(this.email).subscribe(res =>{
  //   this.userInicio.push( res);
   
    
  //   });
  // });
  }

}
