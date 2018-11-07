import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AtomComponent } from './atom/atom.component';

//SERVICIOS
import { AtomService } from './servicios/atom.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AtomComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [
    AtomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
