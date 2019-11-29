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

  productos = [
    //Tu Chambita
    {
      nombre: 'Tu Chambita',
      desc: 'Tu Chambita es una plataforma digital que promueve el enlace entre personas que tienen una necesidad (chambita) y gente dispuesta a solucionarlo.',
      desc2: '',
      link: 'https://www.tuchambita.com',
      fuente: 'lobster',
      imagen1: './assets/img/tuchambita/splash.png',
      imagen2: './assets/img/tuchambita/1.png',
      imagen3: './assets/img/tuchambita/2.png'
    },
    // Matilde
    {
      nombre: 'Matilde',
      desc: 'Matilde es la aplicación oficial del libro “Conócete y Protégete”, desarrollada en realidad aumentada con la cual puedes escanear ilustraciones de la guía desde cualquier dispositivo con cámara, esta aplicación proyecta una imagen anatómica y/o animación 3D para interactuar y aprender de una forma diferente!',
      desc2: 'Matilde es la primera aplicación en realidad aumentada de una guía ilustrativa enfocado a la prevención de embarazo no deseado y métodos anticonceptivos.',
      link: 'https://matilde.site/',
      fuente: 'domine',
      imagen1: './assets/img/matilde/1.png',
      imagen2: './assets/img/matilde/2.png',
      imagen3: './assets/img/matilde/3.png'
    }
  ]

  numeroProducto: number = -1; //Comienza en -1 para la funcion recursiva de avanzarProducto()
  transicionAtm: boolean = true;
  tipoAnimacion: string = 'slideInLeft';

  ngOnInit() {
    this.AtomoS.mostrarTexto = false;
    this.avanzarProducto();
  }

  ngOnDestroy() {
    this.AtomoS.mostrarTexto = true;
  }

  volver() {
    this.location.back();
  }

  avanzarProducto() {
    if (this.transicionAtm) {
      if (this.numeroProducto === this.productos.length - 1) {
        this.numeroProducto = 0;
      } else {
        this.numeroProducto++;
      }
      setTimeout(() => {
        this.avanzarProducto();
      }, 8000);
    }
  }

  cambiarProducto(avanzar: boolean) {

    this.transicionAtm = false;

    if (avanzar) {
      // this.tipoAnimacion = 'slideOutRight';
      // setTimeout(() => {
      if (this.numeroProducto == this.productos.length - 1) {
        this.numeroProducto = 0;
      } else {
        this.numeroProducto++;
      }
      // this.tipoAnimacion = 'slideInLeft';
      // }, 800);

    } else {

      // this.tipoAnimacion = 'slideOutLeft';
      // setTimeout(() => {
      if (this.numeroProducto == 0) {
        this.numeroProducto = this.productos.length - 1;
      } else {
        this.numeroProducto--;
      }
      // this.tipoAnimacion = 'slideInRight';
      // }, 800);
    }

  }

}