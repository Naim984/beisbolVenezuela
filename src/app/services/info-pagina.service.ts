import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];
  equipos: any[] = [];


  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
    this.cargarEquipoVenezuela();

  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://portafoliopersonal-6613f.firebaseio.com/equiposcaribe.json')
    .subscribe( (resp: any[]) => {

      this.equipos = resp;
      // console.log(resp);
    });
  }

  private cargarEquipoVenezuela() {

    // Leer el archivo JSON
    this.http.get('https://portafoliopersonal-6613f.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);
    });
  }

}



