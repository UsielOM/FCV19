import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInicio } from '../../UserInicio';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-beging-page',
  templateUrl: './user-beging-page.component.html',
  styleUrls: ['./user-beging-page.component.css']
})
export class UserBegingPageComponent implements OnInit {
   bandera = true;
   email ="";
  constructor(private authService:AuthService) {}
  ngOnInit(): void {
  //  this.authService.ward(this.email, this.bandera);
  }

}

