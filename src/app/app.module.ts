import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSliderModule,
  MatSlideToggleModule, MatTooltipModule, MatIconModule, MatCardModule, MatListModule, MatAutocompleteModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './templates/landingpage/landingpage.component';
import { LoginComponent } from './templates/login/login.component';
import { DetailsComponent } from './templates/details/details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';
import { ContactComponent } from './inlineaccordion/contact/contact.component';
import { PrivacypolicyComponent } from './inlineaccordion/privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    DetailsComponent,
    ApplicationComponent,
    ConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
