import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      var element = document.getElementById("box");
      element.scrollIntoView({block: "start", behavior: "smooth"});
    }, 500);
    
  }

}
