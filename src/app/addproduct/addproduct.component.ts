import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormGroup, FormControl ,ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MdNativeDateModule} from '@angular/material';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';




@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
    profileForm : any;
    

  val: any;
  product :any;
  

  constructor(private post: ProductService,private _formBuilder: FormBuilder) {
 
    
     this.profileForm =this._formBuilder.group({
      pname: ['',Validators.required],
      pdescription:['',Validators.required],
      pquantity:['',Validators.required],
      pimage:['',Validators.required],
      pexpire:['',Validators.required],
      pcategory:['',Validators.required]
    });
     
    
  }
  
 
  ngOnInit() {
    this.val=this.post.getproduct();
   // console.log(this.val);  
   
   }
    onSubmit() {
      if(this.profileForm.dirty && this.profileForm.valid){
       console.log(this.profileForm);
       this.val.push(this.profileForm.value);
      
        
      }
    
    }

   
     
}
 


