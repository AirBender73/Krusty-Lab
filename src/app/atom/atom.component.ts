import { Component, OnInit } from '@angular/core';
import { AtomService } from '../servicios/atom.service';

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent implements OnInit {

  constructor(
    public atomS: AtomService
  ) {
   }

  ngOnInit() {
  }

}
