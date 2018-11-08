import { Component, OnInit } from '@angular/core';
import { AtomService } from '../servicios/atom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public atomS: AtomService
  ) {
   }

  ngOnInit() {}
}
