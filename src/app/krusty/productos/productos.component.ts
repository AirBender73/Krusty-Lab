import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AtomoService } from '../services/atomo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit, OnDestroy {

  constructor(
    public location: Location,
    public AtomoS: AtomoService
  ) { }

  ngOnInit() {
    this.AtomoS.mostrarTexto = false;
  }

  ngOnDestroy() {
    this.AtomoS.mostrarTexto = true;
  }

  volver() {
    this.location.back();
  }

}
