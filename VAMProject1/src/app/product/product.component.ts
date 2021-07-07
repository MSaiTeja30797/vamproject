import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

/*interface Product
{
  productId:number,
  productName:String,
  productPrice:number,
  productDes:String,
  productImg:String,
}*/

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  filteredString:any;  
  sortby:any='1'
  /*products:Product[]=[
    {productId:101, productName:'toy',productPrice:3000,productDes:'the product is toy ',productImg:'assets/images/hlo.jpg'},
    {productId:102, productName:'drone',productPrice:50000,productDes:'the product is drone ',productImg:'assets/images/drone.jpg'},
    {productId:103, productName:'tiger',productPrice:500,productDes:'the product is tiger ',productImg:'assets/images/tiger.jpg'},
    {productId:104, productName:'car',productPrice:100000,productDes:'the product is drone ',productImg:'assets/images/car.jpg'}
    
    
  ]*/
  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }


}
