import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../entities/productsmap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: string | null;
  product: Product = {};

  constructor(private route: ActivatedRoute, private service: ProductsService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductById();
  }

  /**
   * Get product by ID from the server.
   * @param id The product ID
   * @returns Observable of type Product
   */
  getProductById() {
    this.service.getProductById(this.id).subscribe(product => {
      this.product = product;
    });
  }
}
