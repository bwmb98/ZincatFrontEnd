import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  // message='';

  constructor(private productService: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(
      data=>{
        console.log(data);
        this.gotoProductList();
      },
      error=>{
        console.log("exception occured");
        // this.message = "Product ID already exist";
    }
)
}
  gotoProductList(){
    this._router.navigate(['/product-list']) 
  }

  createProduct(){
    console.log(this.product);
    this.saveProduct();
  }

}
