import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaBasicaService, preguntasBasica } from 'src/app/service/encuesta-basica.service';

@Component({
  selector: 'app-encuestabasica',
  templateUrl: './encuestabasica.component.html',
  styleUrls: ['./encuestabasica.component.css']
})
export class EncuestabasicaComponent implements OnInit {
  preguntasBasicas:preguntasBasica [] = []; 
  constructor(private _encuestaBasica: EncuestaBasicaService) {

   }
   

  ngOnInit(): void {
    this.preguntasBasicas = this._encuestaBasica.getPreguntas();
    
  }

}
