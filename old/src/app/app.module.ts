import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Routes
import { APP_ROUTES } from './app.routes';

// Plugins
import { ParticlesModule } from 'angular-particle';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AtomComponent } from './atom/atom.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServiciosComponent } from './servicios/servicios.component';

// Services
import { AtomService } from './servicios/atom.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AtomComponent,
    ContactInfoComponent,
    PortafolioComponent,
    ServiciosComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    // AppRoutingModule,
    ParticlesModule
  ],
  providers: [
    AtomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
