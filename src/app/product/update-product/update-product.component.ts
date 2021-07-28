import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pID: number;
  product : Product = new Product();
  constructor(private productService: ProductService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.pID = this._route.snapshot.params['pID'];

    this.productService.getProductByID(this.pID).subscribe(
      data=>{
        this.product = data;
      },
    error=> console.log(error)
        );
  }

  updateProduct(){
    this.productService.updateProduct(this.pID, this.product).subscribe(
      data=> {
          this.gotoProductList();
      },
      error=> console.log(error)
          );
  }

  gotoProductList(){
    this._router.navigate(['/product-list']) 
  }

}
