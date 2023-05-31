import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Productdetails } from '../entities/productsmap';
import { Product } from '../entities/productsmap';
import {Category} from '../entities/productsmap';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly BASE_URL = 'https://fakestoreapi.com';
  readonly GET_product = '/products';
  readonly GET_Categories = '/products/categories/';
  readonly GET_Category = '/products/category/';

  //independence injection
  //imort httpclient
  constructor(private http: HttpClient) {}

  //3
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + this.GET_product);
  }


  getAllCatigories(): Observable<Category[]> {
    var res = this.http.get<Category[]>(this.BASE_URL + this.GET_Categories);
    console.log(res);
    return res;
  }
  // create service to get the url of category
  getProuductByCategory(keyword: string): Observable<Product[]> {
    var res = this.http.get<Product[]>(
      this.BASE_URL + this.GET_Category + keyword);
    console.log(res);

    return res;
  }

}


//  1 //creat service
  // getAllProducts(){
  //   return this.http.get('https://fakestoreapi.com/products')
  // }

  // 2
  // getAllProducts() {
  //   // console.log(this.http.get(this.BASE_URL + this.GET_product).subscribe((res)=> {console.log(res)} ))
  //   // return this.http.get(this.BASE_URL + this.GET_product)

  //   return this.http.get(this.BASE_URL+this.GET_product)
  // }

//creat service for categories
  //2.cat
        // getAllCatigories(): Observable<Product[]> {
        //   var res = this.http.get<Product[]>(this.BASE_URL + this.GET_Categories);
        //   console.log(res);
        //   return res;
        // }


  //product details
  
