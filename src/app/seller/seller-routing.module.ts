import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerComponent} from './seller.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListComponent as ShopListComponent} from "./shop/list/list.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'shop/list', component: ShopListComponent},
  {path: '', component: SellerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule {
}
