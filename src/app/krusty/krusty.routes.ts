import { RouterModule, Routes } from '@angular/router';

//RUTA PRINCIPAL
import { KrustyComponent } from './krusty.component';

//RUTAS HIJAS
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const NoticiasRoutes: Routes = [
    {
        path: '',
        component: KrustyComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'servicios', component: ServiciosComponent },
            { path: 'productos', component: ProductosComponent },
            { path: 'portafolio', component: PortafolioComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],

    }
];


export const KRUSTY_ROUTES = RouterModule.forChild(NoticiasRoutes);