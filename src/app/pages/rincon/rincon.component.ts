import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-rincon',
  templateUrl: './rincon.component.html',
  styleUrls: ['./rincon.component.css']
})
export class RinconComponent implements OnInit {

  constructor( public infoService: InfoPaginaService) { }

  ngOnInit() {
  }

}
