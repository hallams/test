import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../entities/productsmap';
import { Category } from '../entities/productsmap';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/products/categories`);
  }

  getProductByCategory(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products/category/${keyword}`);
  }
  
  /**
   * 
   * @param id 
   * @returns observable of type product  from server 
   */
  getProductById(id: string | null): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + (id ? `/products/${id}` : ''));
  }
}
