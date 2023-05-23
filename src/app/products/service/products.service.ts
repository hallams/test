import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //independence injection
  constructor( private http:HttpClient) { }

getAllProducts(){
  return this.http.get('https://fakestoreapi.com/products')
}
}
