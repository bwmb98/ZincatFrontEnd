import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  placements = ['left'];
  popoverTitle = 'Delete Confirmation';
  popoverMessage = 'Delete this record?';
  confirmText = 'Yes <i class="fas fa-check"></i>';
  cancelText = 'No <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
  //trackByValue: deleteProduct<int> = (pID, number) => number;

  constructor(private productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(
      data=>{
        this.products = data;
      }
    )
  }

  viewProduct(pID:number){
    this._router.navigate(['product-details', pID]);
  }

  updateProduct(pID:number){
    this._router.navigate(['update-product', pID]);
  }

  deleteProduct(pID:number){
    this.productService.deleteProduct(pID).subscribe(
      data=> {
        console.log(data);
        this.getProduct();}
    )
  }
}
