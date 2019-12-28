import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { LoginComponent }      from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { AboutComponent }      from './about/about.component';
import { AdminPanelComponent }      from './admin-panel/admin-panel.component';
import { ContactComponent }      from './contact/contact.component';
import { ProductsComponent }      from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'login', component: LoginComponent },
  {path: 'registration', component : RegistrationComponent},
  {path: 'about', component : AboutComponent},
  {path: 'adminpanel', component : AdminPanelComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'products', component : ProductsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
