
import { ProductService } from '../services/product.service';

import { AddproductComponent } from '../addproduct/addproduct.component';
import {Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  product :any;
  val: any;

  constructor(private post: ProductService,private dialog:MatDialog) {}

    ngOnInit() {
      this.val=this.post.getproduct();
      console.log(this.val);
      

  }
 
/*  popup(){
    const dialogConfig =new MatDialogConig();
    dialogConfig.disableClose =true;
    dialogConfig.autofocus =true;
    dialogConfig.width="60%";
    this.dialog.open(AddproductComponent,dialogConfig);

  }

};
*/

  popup(): void {
    const dialogRef = this.dialog.open(AddproductComponent, {
      width: '60%',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}

