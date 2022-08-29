import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact', component: ContactPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver }
      },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolver },
  },
  {
    path: 'stats',
    component: StatisticsPageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
