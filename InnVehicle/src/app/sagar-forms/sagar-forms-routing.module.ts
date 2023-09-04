import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SagarFormsComponent } from './sagar-forms.component';

const routes: Routes = [{ path: '', component: SagarFormsComponent },
{path:'register', component:RegisterComponent},
{path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SagarFormsRoutingModule { }
