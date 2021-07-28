import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { LoginComponent } from './user/login/login.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

const routes: Routes = [
  {   path:'', component:LoginComponent  },
  {   path:'registration', component:RegistrationComponent},
  {   path:'login', component:LoginComponent},
  {   path:'product-list', component:ProductListComponent},
  {   path:'create-product', component:CreateProductComponent},
  {   path:'update-product/:pID', component:UpdateProductComponent},
  {   path:'product-details/:pID', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
