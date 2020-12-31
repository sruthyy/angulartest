import { Injectable } from '@angular/core';
import { product } from '../models/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:product[];

  constructor() { 
    

  this.product = 
    [
      { pid: 1 , pname: 'ab', pdescription: 'ab product' ,pimage :' ' ,pquantity: 5 },
      { pid: 2, pname: 'cd', pdescription: 'cd product', pimage :' ' ,pquantity:5},
      { pid: 3, pname: 'ef', pdescription: 'ef product' ,pimage :' ' ,pquantity:5 },
      
    ]
    
  }
  getproduct(){
    return this.product;
  }

};


