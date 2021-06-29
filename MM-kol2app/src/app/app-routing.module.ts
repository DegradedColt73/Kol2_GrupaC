import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsMMComponent } from './components/shop-details-mm/shop-details-mm.component';
import { ShopMMComponent } from './components/shop-mm/shop-mm.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopMMComponent
  },
  {
    path: 'details/:id',
    component: ShopDetailsMMComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
