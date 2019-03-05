//Import necessari
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Import Components
import  { LoginComponent } from './components/login/login.component';
import  { RegisterComponent } from './components/register/register.component';

//Definire le route
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent}
];

//Esportare la configurazione
export const appRoutingProviders = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
