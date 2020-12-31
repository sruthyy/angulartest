import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from "./services/product.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AddpopupComponent } from './addpopup/addpopup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import {MatDialog,MatDialogConig} from '@angular/material';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    AddproductComponent, 
    RoutingComponent, 
    AddpopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
   
    MatInputModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,

    FormsModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[AddproductComponent]
})
export class AppModule { }

