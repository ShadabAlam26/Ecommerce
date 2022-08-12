import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { ProductLabel } from 'src/app/label-externalisation/product-externalisation';
import { CartService } from 'src/app/service/cart.service';
import { HomeService } from 'src/app/service/home.service';
// import { Products } from '../../product.modal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  label:ProductLabel
  cart = [];
  productItems: any;
  constructor(@Inject (MAT_DIALOG_DATA)public data:any,private matDialog:MatDialogRef<DialogComponent>,private cartService:CartService,private home:HomeService) { }
  panelOpenState = false;

  successMessage: string;

  isSuccess: boolean;

  ngOnInit(): void {
    this.label= new ProductLabel();


  }

 
  addToCart(data:any)
  {
    this.cartService.addToCart(data);
    this.setSuccessMessage('Product added successfully!!');

  }

  setSuccessMessage(message: string) {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 6000);
  }

}
