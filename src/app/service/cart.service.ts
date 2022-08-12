import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems:any=[];
  public productItem = new BehaviorSubject<any>([])

  constructor() { }

  getAllProducts()
  {
    return this.productItem.asObservable();
  }

  // setProduct(product:any)
  // {
  //   this.cartItems.push(...product);
  //   this.productItems.next(product);
  // }

  addToCart(product:any)
  {
    this.cartItems.push(product);
    this.productItem.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems)
  }

  getTotalPrice(): number
  {
    let totalAmount = 0;
    this.cartItems.map((x:any)=>{
       totalAmount += x.total
    })
    return totalAmount;
  }

  removeCartItem(product:any)
  {
    this.cartItems.map((x:any,index:any)=>{
      if(product.id === x.id)
      {
        this.cartItems.splice(index,1)
      }
   })
   this.productItem.next(this.cartItems)
  }

  removeAllFromCart()
  {
    this.cartItems =[];
    this.productItem.next(this.cartItems)
    
  }
}
