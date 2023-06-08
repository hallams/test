import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';

const routes: Routes = [
  {path:"products", component : AllProductsComponent},
  {path:"details/:id", component :ProductDetailsComponent},
  // {path:"det", component :ProductDetailsComponent},

  //by defualt this page 
  {path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
