import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
import { HomeService } from '../service/home.service';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { Products } from './product.modal';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  category=['All products','Electronics','Fashion','Jewellery']
  searchProducts : ""
  product:Products[]=[]
  switchCondition: string;
  electronics: Products[];
  fashion: Products[];
  jewelery: Products[];
  allProduct: boolean;
  cartDetail: any;
  totalCartItem: number = 0;
  constructor(private auth:AuthService,private home:HomeService,public dialog: MatDialog,private cartService:CartService,private app:AppComponent) { }

  ngOnInit(): void {

    this.home.getAllProduct().subscribe(
      res=>
      {
        console.log(res)
        this.product = res;
      }

      
    )
    this.cartService.getAllProducts().subscribe((res)=>{
      this.totalCartItem = res.length;
    })
  }

  logOut()
  {
      this.auth.logoutEcomm();
      this.app.setSuccessMessage(`User logged out successfully!!`)
  }






  

}
