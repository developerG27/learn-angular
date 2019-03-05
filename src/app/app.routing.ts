//Import necessari
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Import Components
import  { LoginComponent } from './components/login/login.component';
import  { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
//Definire le route
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: '**', component: ErrorComponent}
];

//Esportare la configurazione
export const appRoutingProviders = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
