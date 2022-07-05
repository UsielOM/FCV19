import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../service/usuarios.service';
import { Register } from 'src/app/interface/register';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  reg: Register = new Register();
  
  constructor(private router:Router, private usuarios:UsuariosService) { }


  pageUser(){
    this.router.navigate(['User'])
  }
  ngOnInit(): void {
  }

  createRegistro(): void
{

  this.usuarios.createRegistro(this.reg).subscribe(result =>{
    this.reg = result;
  });
}

 
}

