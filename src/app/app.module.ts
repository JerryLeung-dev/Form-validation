import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/form-field';

import {
  MatButtonModule
} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { PasswordConfirmDirective } from './directives/password-confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    PasswordStrengthDirective,
    PasswordConfirmDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],

  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
