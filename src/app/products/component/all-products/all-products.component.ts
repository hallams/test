import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Injectable } from '@angular/core';
//import observable
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
  // // creat array to save the data i well get it from API later here
  // products:any[]=[]
  // 2
  // products:productdetails= {productList:[]};
  //3
  products: Product[] = [];

  // caregories: any[] = [];
  caregories: Category[] = [];

  constructor(private service: ProductsService, router: Router) {}
  //dependence injection
  // constructor(private service: ProductsService) {}

  //3
  // on ngOnInit we write , declarate, call : what we want to display in the app page just it louded(open)
  ngOnInit() {
    //get request
    this.service.getAllProducts().subscribe((res: Product[]) => {
      this.products = res;
      console.log(res);
    });

    this.getCategories();
  }

  //-----------------------------------filtter-----------------------------------------

  ///..................................1- Get categories .........................................
  //methode to get data from api and save it in the empty array we have dentify above categories
  //and by ngFor in the templen in file html the categories will display in the sellection in UI
  getCategories() {
    //get request
    this.service.getAllCatigories().subscribe((res: Category[]) => {
      this.caregories = res;
      console.log(res);
    });
  }

  // .............................2- filtter Activitton.................................. .....
  //call this method in templet in selection in file html
  // to know the change that happens  in the selection to get the value of category for making filter
  filterCategory(event: any) {
    console.log(event);

    // here i get the word (value)of category i want ex:'value = electronic'
    let value = event.target.value;
    // in the consoul we get the nsame of the category when we choose it from the list but
    //but nothing change in the UI
    // NOW I HAVE TO PRAPAIR Aservice in the service.ts
    console.log(value);
    //send the value to the method or function which will make filter in thr UI
    this.getProductsCategory(value);
  }
  //method to pass the value of category to the service
  getProductsCategory(keyword: string) {
    //get request
    this.service.getProuductByCategory(keyword).subscribe((res: any) => {
      this.products = res;

      console.log(res);
    });
  }
  //-----------------------------------filtter End-----------------------------------------
}

  // ...........................................2.2 begin .............................

  //   ngOnInit():void{
  //     // this.getProuducts()

  //     this.getCategories()

  //     this.service.getAllProducts().subscribe((res:any) => {
  //     console.log(this.products);

  //     this.products.productList=res;
  //     console.log(res);
  //     console.log(this.products)

  //   } , error => {
  //     alert( "there is ERROR")
  //     console.log(error.message)
  //   })
  // }

  //........................... 2.2 end.....................................

  //2
  // ngOnInit():void{
  //     this.service.getAllProducts().subscribe((res:any) => {
  //     this.products= res;
  //     console.log(res)
  //   })

  //   }

  // }
  //1
  // ngOnInit():void{
  //   //call getproducts
  //   this.getProuducts()

  // }
  // getProuducts(){
  //   //make observable by using method (subscribe) to move the data from backend to frontend we need observable
  //   this.service.getAllProducts().subscribe((res:any) => {
  //     // save the data i get from API in the array all prouducts
  //     this.products= res;
  //     console.log(res)
  //   })
  // }

  // }

// ,
//       (error) => {
//         alert('there is ERROR');
//         console.log(error.message);
//       }
