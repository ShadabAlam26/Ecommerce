import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path:"",
    component:StoreComponent,
    children: [
      { path: 'product', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: '/store/product', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
