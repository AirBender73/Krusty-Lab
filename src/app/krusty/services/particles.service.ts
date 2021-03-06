import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {

  constructor() { }

  //PARTICLES
  myStyle: object = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    particles: {
      number: {
        value: 40,
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
      },
    }
  };

  width: number = 100;
  height: number = 100;

}
