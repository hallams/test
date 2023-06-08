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

  /**
   * Get all products from the server.
   * @returns Observable of type Product[]
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }

  /**
   * Get all categories from the server.
   * @returns Observable of type Category[]
   */
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/products/categories`);
  }

  /**
   * Get products by category from the server.
   * @param keyword The category keyword
   * @returns Observable of type Product[]
   */
  getProductByCategory(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products/category/${keyword}`);
  }

  /**
   * Get product by id from the server.
   * @param id The product id
   * @returns Observable of type Product
   */
  getProductById(id: string | null): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + (id ? `/products/${id}` : ''));
  }
}
