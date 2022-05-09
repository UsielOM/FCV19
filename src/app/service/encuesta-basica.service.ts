import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaBasicaService {
  private preguntasBasicas: preguntasBasica [] = [
    {
    pregunta: "En las ultimas 24/7 horas. ¿Ha convivido con alguna persona enferma o sospechosa  de COVID-19?",
    si:"SI",
    no: "No"
    },
    {
      pregunta: "En las ultimas 24/7 horas. ¿Le han practicado pruebas de laboratorio para diagnosticar COVID-19?",
      si: "Si",
      no: "No"
    }
  ]
  constructor() { }

  getPreguntas():preguntasBasica[]{
return this.preguntasBasicas;
  }
}

export interface preguntasBasica{
  pregunta: string
  si: string
  no: string
}
