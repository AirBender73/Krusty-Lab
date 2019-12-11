import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  datatarget;

  productos = [
    //Tu Chambita
    {
      nombre: 'Conócete y protégete',
      desc: 'Con la aplicación en realidad aumentada. Conócete y protégete es una guía ilustrativa realizada con los siguientes objetivos.',
      desc2: '- Aumentar los conocimientos básicos de anatomía humana.',
      desc3: '- Disminuir el embarazo adolescente.',
      desc4: '- Prevenir enfermedades de transmisión sexual.',
      desc5: '- Aspectos de legales del aborto.',
      desc6: '- Perder el miedo y erradicar las falsas creencias que existen sobre los métodos anticonceptivos.',
      desc7: '- Recibir dudas y preguntas de los lectores y añadirlas a futuras ediciones.',
      link: 'https://www.tuchambita.com',
      imagen1: './assets/img/tuchambita/splash.png',
      imagen2: './assets/img/tuchambita/1.png',
      imagen3: './assets/img/tuchambita/2.png',
    },
    // Ortopedia y artículos médicos
    {
      nombre: 'Ortopedia y artículos médicos',
      desc2: 'PRODUCTOS Y ZAPATOS ORTOPÉDICOS',
      desc3: 'Conozca nuestra amplia gama de productos ortopédicos al mejor precio.',
      desc4: 'FABRICACIÓN DE APARATOS ORTOPÉDICOS Y PROTÉSICOS',
      desc5: 'Contamos con un excelente servicio elaboración de aparatos ortopédicos y protésicos de calidad.',
      desc6: 'ARTÍCULOS MÉDICOS Y MATERIAL DE CURACIÓN',
      desc7: 'Contamos una amplia variedad de artículos médicos especializados.',
      link: 'https://matilde.site/',
      imagen1: './assets/img/matilde/1.png',
      imagen2: './assets/img/matilde/2.png',
      imagen3: './assets/img/matilde/3.png',
    },
    // Ortopedia 2001
    {
      nombre: 'Ortopedia 2001',
      desc2: 'Productos ortopédicos',
      desc3: 'Conozca nuestra amplia gama de productos ortopédicos al mejor precio.',
      desc4: 'FABRICACIÓN DE APARATOS ORTOPÉDICOS Y PROTÉSICOS',
      desc5: 'Contamos con un excelente servicio elaboración de aparatos ortopédicos y protésicos de calidad.',
      desc6: 'ARTÍCULOS MÉDICOS Y MATERIAL DE CURACIÓN',
      desc7: 'Contamos una amplia variedad de artículos médicos especializados.',
      link: 'https://matilde.site/',
      imagen1: './assets/img/matilde/1.png',
      imagen2: './assets/img/matilde/2.png',
      imagen3: './assets/img/matilde/3.png',
    },
    // Ortopedia del sureste
    {
      nombre: 'Ortopedia del sureste',
      desc: 'Matilde es la primera aplicación en realidad aumentada de una guía ilustrativa enfocado a la prevención de embarazo no deseado y métodos anticonceptivos.',
      link: 'https://matilde.site/',
      imagen1: './assets/img/matilde/1.png',
      imagen2: './assets/img/matilde/2.png',
      imagen3: './assets/img/matilde/3.png',
    }
  ]

  contador: number;

  constructor() { }

  ngOnInit() {
  }

  collapse(index: number) {

    var content: any = document.getElementsByClassName("content");

    for (let i = 0; i < content.length; i++) {
      content[i].style.maxHeight = null;
    }

    if (this.contador === index) {
      content[index].style.maxHeight = null;
      this.contador = undefined;
    } else {
      this.contador = index;
      content[index].style.maxHeight = "500px";
    }


  }
}
