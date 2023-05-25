import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {productdetails} from '../entities/productsmap'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly BASE_URL = 'https://fakestoreapi.com/products';
  readonly GET_product = '/all-products';
  //independence injection
  //imort httpclient
  constructor( private http:HttpClient) { }


//   //creat service
// getAllProducts(){
//   return this.http.get('https://fakestoreapi.com/products')
// }

getAllProducts() : Observable<productdetails> {
  return this.http.get<productdetails>(this.BASE_URL + this.GET_product)
}

}
