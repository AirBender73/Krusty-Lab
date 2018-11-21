import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  sitios: boolean = false;
  app: boolean = false;
  db: boolean = false;

  constructor() { }

  ngOnInit() {}

  show(option){
    this.sitios = false;
    this.app = false;
    this.db = false;
    setTimeout(() => {
      switch (option){
        case 'sitios':
          this.sitios = true;
        break;
        case 'app':
          this.app = true;
        break;
        case 'db':
          this.db = true;
        break;
      }
    }, 50);

}
}
