import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { KRUSTY_ROUTES } from './krusty.routes';

// Plugins

// Componentes
import { KrustyComponent } from './krusty.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { AtomoComponent } from './atomo/atomo.component';

// Servicios
import { AtomoService } from './services/atomo.service';

// Pipes


@NgModule({
    declarations: [
        KrustyComponent,
        ContactoComponent,
        HomeComponent,
        PortafolioComponent,
        ServiciosComponent,
        ProductosComponent,
        AtomoComponent
    ],
    imports: [
        BrowserModule,
        KRUSTY_ROUTES,
    ],
    providers: [
        AtomoService
    ]
})
export class KrustyModule { }
