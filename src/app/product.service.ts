import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/v1/product";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductByID(pID: number):Observable <Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${pID}`);
  }

  updateProduct(pID: number, product: Product):Observable <Object>{
    return this.httpClient.put(`${this.baseURL}/${pID}`, product);
  }

  deleteProduct(pID: number): Observable <Object>{
    return this.httpClient.delete(`${this.baseURL}/${pID}`);
  }
}
