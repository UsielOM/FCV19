import { Component, OnInit } from '@angular/core';
import { UserInicio } from '../../../UserInicio';
import { Observable } from 'rxjs';
import { Correo } from 'src/app/service/auth.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent implements OnInit {
  usuarioInicio:UserInicio []=[];
  
  arrayEmail:any;
  wardCorreo="";

  constructor(private authService:AuthService) {
    this.arrayEmail =authService.sharingObservable;
    this.wardCorreo=this.arrayEmail.source._value.email;
   }

  ngOnInit(): void {
    this.authService.getUser(this.wardCorreo).subscribe(res =>{
      this.usuarioInicio.push(res);
     
    })
  }

}
