import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  sitios: boolean = false;
  appWeb: boolean = false;
  lanPage: boolean = false;
  app: boolean = false;
  appMovilH: boolean = false;
  appMovilN: boolean = false;
  db: boolean = false;
  dbTR: boolean = false;
  dbSQL: boolean = false;
  dbNoSQL: boolean = false;

  constructor() { }

  ngOnInit() {}

  show(option){
    this.sitios = false;
    this.appWeb = false;
    this.lanPage = false;
    this.app = false;
    this.appMovilH = false;
    this.appMovilN = false
    this.db = false;
    this.dbTR = false;
    this.dbSQL = false;
    this.dbNoSQL = false;
    setTimeout(() => {
      switch (option){
        case 'sitios':
          this.sitios = true;
        break;
        case 'appWeb':
          this.appWeb = true;
        break;
        case 'lanPage':
          this.lanPage = true;
        break;
        case 'app':
          this.app = true;
        break;
        case 'appMovilH':
          this.appMovilH = true;
        break;
        case 'appMovilN':
          this.appMovilN = true;
        break;
        case 'db':
          this.db = true;
        break;
        case 'dbTR':
          this.dbTR = true;
        break;
        case 'dbSQL':
          this.dbSQL = true;
        break;
        case 'dbNoSQL':
          this.dbNoSQL = true;
        break;
      }
    }, 50);

}
}
