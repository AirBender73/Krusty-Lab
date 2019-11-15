import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { KrustyModule } from './krusty/krusty.module';



// Plugins
import { ParticlesModule } from 'angular-particle';
// import { AtomoComponent } from './krusty/atomo/atomo.component';

@NgModule({
  declarations: [
    AppComponent,
    // AtomoComponent
  ],
  imports: [
    BrowserModule,
    KrustyModule,
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
