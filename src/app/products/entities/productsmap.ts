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


export interface Category{   
  0: "electronics"
  1: "jewelery"
  2: "men's clothing"
  3: "women's clothing"
}
