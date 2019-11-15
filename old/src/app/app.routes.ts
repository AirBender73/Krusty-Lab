import { RouterModule, Routes } from '@angular/router';

// Routes
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';


const NoticiasRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'servicios', component: ServiciosComponent }
];


export const APP_ROUTES = RouterModule.forChild(NoticiasRoutes);