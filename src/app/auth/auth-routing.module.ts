import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {LoginComponent as SellerLoginComponent} from "./seller/login/login/login.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
  {path: 'seller/login', component: SellerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
