import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../entities/productsmap';
import { Category } from '../../entities/productsmap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private service: ProductsService, router: Router) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe(products => {
      this.products = products;
    });
    this.getCategories();
  }

  /**
   * This method gets all categories from the server.
   * @returns Observable of type Category[]
   */
  getCategories() {
    this.service.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  /**
   * Filter products by category.
   * @param event The event object
   */
  filterCategory(event: any) {
    const value = event.target.value;
    this.getProductsCategory(value);
  }

  /**
   * This method gets products by category from the server.
   * @param keyword The category keyword
   * @returns Observable of type Product[]
   */
  getProductsCategory(keyword: string) {
    this.service.getProductsCategory(keyword).subscribe(products => {
      this.products = products;
    });
  }
}
