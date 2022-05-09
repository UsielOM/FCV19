import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaBasicaService {
  private preguntasBasicas: any [] = [
    {

    }
  ]
  constructor() { }
}

export interface preguntasBasica{
  pregunta: string
  si: string
  no: string
}
