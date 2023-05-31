// export interface Productdetails {
//   productList: Product[];
// }
export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
  rating:any;
}

// export interface Categories = {
//   "electronics": { id: 1, name: "Electronics" };
//   "jewelery": { id: 2, name: "Jewelry" };
//   "men's clothing": { id: 3, name: "Men's Clothing" };
//   "women's clothing": { id: 4, name: "Women's Clothing" }
// }

// export interface Category  {
//   id: number;
//   name: string ;
// }

export interface Category{   
  0: "electronics"
  1: "jewelery"
  2: "men's clothing"
  3: "women's clothing"
}
