import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krusty',
  templateUrl: './krusty.component.html',
  styleUrls: ['./krusty.component.scss']
})
export class KrustyComponent implements OnInit {

  constructor() { }

  //AUDIO
  backgroundMuted: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      // this.audioBackground();
    }, 2000)
  }

  audioBackground() {
    let audio: any = document.getElementById("backgroundSound");
    audio.autoplay = true;
    audio.loop = true;
    audio.load();
  }


  muted() {
    let audio: any = document.getElementById("backgroundSound");
    if (this.backgroundMuted) {
      audio.muted = false;
      this.backgroundMuted = false;
    } else {
      audio.muted = true;
      this.backgroundMuted = true;
    }
  }

}
