import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AtomService {
  
   //PARTICLES
   myStyle: object = {};
   myParams: object = {};
   width: number = 100;
   height: number = 100;

   mostrarIconos: boolean = true;
   animationIconos: boolean = false;
   animationIconosIn: boolean = false;
   acelerarAtomo: boolean = false;
  
   contact: boolean = false;
   portafolio: boolean = false;
   proyectos: boolean = false;  

 //AUDIO
 backgrounMuted: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.audioBackgroung();
    }, 2000);  
    
    this.particles();
  }

  navegar(option){
    this.ocultarIconos();
    this.proyectos = false;
    this.portafolio = false;
    this.contact = false;
    setTimeout(() => {
      switch (option){
        case 'contact':
          console.log("FUNCIONA EL CONTACTO");
          this.contact = true;
        break;
        case 'portafolio':
          console.log("FUNCIONA EL PORTAFOLIO");
          this.portafolio = true;
        break;
        case 'proyectos':
          console.log("FUNCIONA PROYECTOS");
          this.proyectos = true;
      }
    }, 750);
    
  }
  
  regresarMenu(){
    this.atomAnimation(true);
    

    setTimeout(() => {
      //Cerra todas las ventanas
      this.proyectos = false;
      this.portafolio = false;
      this.contact=false;

      //Mostrar los iconos y la animación
      this.mostrarIconos = true;
      this.animationIconosIn = true;  
    }, 750);
    setTimeout(() => {
      this.atomAnimation(false);  
    }, 1000);


  }
  

  ocultarIconos(){
    this.animationIconos = true;
    this.atomAnimation(true);

    setTimeout(() => {
      this.mostrarIconos = false;
      this.animationIconos = false;  
    }, 750);
    setTimeout(() => {
      this.atomAnimation(false);  
    }, 1000);
  }
  
  atomAnimation(acelerar){
    if(acelerar){
      this.acelerarAtomo = true;
      this.playAtomo();
    }else{
      this.acelerarAtomo = false;
    }

  }
  
  audioBackgroung(){
    let audio:any = document.getElementById("backgroundSound");
    audio.autoplay = true;
    audio.loop = true;
    audio.load();
  }
  
  playAtomo(){
    this.acelerarAtomo = true;
    var audioElect:any = document.getElementById("soundElect");
    audioElect.muted = false;
    audioElect.autoplay = true;
    audioElect.load();

    setTimeout(() => {
      audioElect.muted = true;
      this.acelerarAtomo = false;
    }, 1500);
  }

  muted(){
    let audio:any = document.getElementById("backgroundSound");
    if(this.backgrounMuted){
      audio.muted = false;
      this.backgrounMuted = false;
    }else{
      audio.muted = true;
      this.backgrounMuted = true;
    }
  }

  particles(){
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
          particles: {
              number: {
                  value: 50,
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'circle',
              },
          }
        };
      }
}

