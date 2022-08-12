import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Products } from '../product.modal';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CartService } from 'src/app/service/cart.service';
import { CartDetails } from './cart.model';
import { AppComponent } from 'src/app/app.component';
import { CartLabel } from 'src/app/label-externalisation/cart-externalisation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  label:CartLabel
  cartDetail: CartDetails[];
  totalAmount: number=0;
  displayedColumns: string[] = ['id','productName','img','category', 'price','quantity','amount','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  payment : google.payments.api.PaymentDataRequest ={
    apiVersion: 2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:'CARD',
        parameters:{
          allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
          allowedCardNetworks:['MASTERCARD','VISA']
        },
        tokenizationSpecification:{
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:'example',
            gatewayMerchantId:'exampleGatewayMerchantId'
          }
        }

      }
    ],
    merchantInfo:{
      merchantId:'13243453557768',
      merchantName:'Demo Merchant'
    },
    offerInfo: {
      offers: [
        {
          redemptionCode: "exampleCode",
          description: "example description of offer"
        }
      ]
    },
    transactionInfo:{
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total',
      totalPrice: '100',
      currencyCode:'USD',
      countryCode:'US'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
    };

    onLoadPaymentData =(event:Event):void=>{
      console.log(this.payment.transactionInfo.totalPrice)
      const eventDetail = event as CustomEvent<google.payments.api.PaymentData>
      console.log(eventDetail.detail)
    };


    onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
      paymentData
    ) =>{
      console.log('payment authorized',paymentData);
      return {
        transactionState:'SUCCESS'
      }
    }

    onError=(event:ErrorEvent):void=>{
      console.error('error',event.error)
    }
  
  constructor(private home:HomeService,private cart:CartService,private app:AppComponent) { }

  ngOnInit(): void {

    this.cart.getAllProducts().subscribe(res=>{
      this.cartDetail = res;
      this.dataSource = new MatTableDataSource(this.cartDetail);
     
      this.totalAmount = this.cart.getTotalPrice();
      this.label=new CartLabel()
      
    })


    this.invokeStripe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator)
    this.dataSource.sort = this.sort 
}



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeItem(data:any)
  {
    this.cart.removeCartItem(data);
    this.app.setErrorMessage(`Product removed from cart`)
  }

  emptyCart()
  {
    this.cart.removeAllFromCart();
    this.app.setErrorMessage(`All Product removed from cart`)
  }



  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51LUZjqSGTmba3dnXAIjCaSWeTyE0v3mnpIOh3vz3alwkUmjv5WexsRW54N9T3oGfsYm3e2BWpequ1Mag5TbdGIVk00dzoBIWT1',

      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken.card);
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'E-commerce Payment',
      description: this.cartDetail.length + ' Products Added',
      image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }


}
