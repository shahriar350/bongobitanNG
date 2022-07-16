import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './shop/list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SellerComponent,
    DashboardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SellerModule { }
