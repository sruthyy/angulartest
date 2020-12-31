import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbdetailsComponent } from './abdetails/abdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"productlist",component:ProductlistComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"abdetails",component:AbdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [ProductlistComponent,AddproductComponent,AbdetailsComponent];
