import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    public location: Location
  ) { }

  ngOnInit() {
  }

  volver() {
    this.location.back();
  }

}
