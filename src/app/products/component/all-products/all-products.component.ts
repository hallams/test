import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Injectable } from '@angular/core';
//import observable
import { Observable } from 'rxjs';
import {productdetails , product } from '../../entities/productsmap'


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
@Injectable ({
  providedIn: 'root'
})

export class AllProductsComponent implements OnInit {
  // // creat array to save the data i well get it from API later here 
  // products:any[]=[
  // ]
  products:product[]=[];
  //dependence injection
  constructor( private service:ProductsService){}


    ngOnInit():void{
      this.service.getAllProducts().subscribe((res:productdetails) => {
      this.products=res.productdetails;
      console.log(res)
    });
    
    // ngOnInit():void{
    //     this.service.getAllProducts().subscribe((res:any) => {
    //     this.products= res;
    //     console.log(res)
    //   })
      

    }
    
  }

//   ngOnInit():void{
//     //call getproducts
//     this.getProuducts()
    

//   }
//   getProuducts(){
//     //make observable by using method (subscribe) to move the data from backend to frontend we need observable 
//     this.service.getAllProducts().subscribe((res:any) => {
//       // save the data i get from API in the array all prouducts
//       this.products= res;
//       console.log(res)
//     })
//   }

// }
// public getAvailableClaims(): Observable<Claims> {
    //   return this.http.get<Claims>(this.BASE_URL + this.GET_CLAIMS);
    // }