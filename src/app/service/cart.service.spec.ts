import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  const prod = 
  [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120},"total":300},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259},"total":400},]
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  const totalAmount = 700;

  it('should be created & added the product succesfully', () => {
    expect(service).toBeTruthy();

    service.productItem.next(prod)
    service.getAllProducts().subscribe(res=>{
        expect(res[0].id).toEqual(prod[0].id);
        expect(res[0].total).toEqual(prod[0].total);
    })
    
  });

  it('should check the cart total amount',()=>{
    service.cartItems.push(...prod);
    expect(service.getTotalPrice()).toEqual(totalAmount);
    
    expect(service.getTotalPrice()).toEqual(700)
  })

  it('should check if product is getting deleted properly',()=>{
    service.cartItems.push(...prod);
    service.removeCartItem(prod[0]);  
    expect(service.cartItems.length).toEqual(1)
  })

  it('should empty the cart',()=>{
    service.cartItems.push(...prod);
    service.removeAllFromCart();
    expect(service.cartItems.length).toEqual(0)
  })

});
