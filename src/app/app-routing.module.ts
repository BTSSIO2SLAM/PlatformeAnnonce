import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { LoginComponent } from './components/login/login.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'add-annonce', component: AddAnnonceComponent },
  { path: 'inscription', component: RegisterComponent },
// { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
