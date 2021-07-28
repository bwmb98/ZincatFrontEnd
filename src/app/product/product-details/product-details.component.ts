import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pID:number
  product:Product

  constructor(private _route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.pID = this._route.snapshot.params['pID'];

    this.product = new Product();
    this.productService.getProductByID(this.pID).subscribe(
      data=>{
        this.product=data;
      }
    )
  }

}
