import { Component, OnInit } from '@angular/core';
import { AtomoService } from '../services/atomo.service';

@Component({
  selector: 'app-atomo',
  templateUrl: './atomo.component.html',
  styleUrls: ['./atomo.component.scss']
})
export class AtomoComponent implements OnInit {
  acelerarAtomo: boolean;

  constructor(
    public AtomoS: AtomoService
  ) { }

  ngOnInit() {
  }

  playAtomo() {
    this.acelerarAtomo = true;
    var audioElect: any = document.getElementById("soundElect");
    audioElect.muted = false;
    audioElect.autoplay = true;
    audioElect.load();

    setTimeout(() => {
      audioElect.muted = true;
      this.acelerarAtomo = false;
    }, 1500);
  }

  atomAnimation(acelerar) {
    if (acelerar) {
      this.acelerarAtomo = true;
      this.playAtomo();
    } else {
      this.acelerarAtomo = false;
    }

  }

}
