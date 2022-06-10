import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInicio } from '../../UserInicio';
import { AuthService, Correo } from '../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-beging-page',
  templateUrl: './user-beging-page.component.html',
  styleUrls: ['./user-beging-page.component.css']
})
export class UserBegingPageComponent implements OnInit {
  data$: Observable<Correo>
  constructor(private authService:AuthService) {
    this.data$= authService.sharingObservable;
    console.log(this.data$);
  }
  ngOnInit(): void {
  //  this.authService.ward(this.email, this.bandera);
  }

}

