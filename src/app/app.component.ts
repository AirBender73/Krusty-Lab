import { Component } from '@angular/core';
import { ParticlesService } from './krusty/services/particles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(
    public particleS: ParticlesService
  ) { }

  title = 'krusty';
}
