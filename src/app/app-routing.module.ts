import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component'; 
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent, canActivate: [AuthGuard] },
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'statistic', component: StatisticPageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupPageComponent },
  { path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
