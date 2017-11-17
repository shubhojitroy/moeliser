import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './templates/landingpage/landingpage.component';
import { LoginComponent } from './templates/login/login.component';
import { DetailsComponent } from './templates/details/details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';

import { PrivacypolicyComponent } from './inlineaccordion/privacypolicy/privacypolicy.component';
import { ContactComponent } from './inlineaccordion/contact/contact.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'tofu', component: PrivacypolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path:'', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
