import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SagarFormsRoutingModule } from './sagar-forms-routing.module';
import { SagarFormsComponent } from './sagar-forms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SagarFormsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SagarFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SagarFormsModule { }
