import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductLabel } from 'src/app/label-externalisation/product-externalisation';
import { LoadingService } from 'src/app/loading/loading.service';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { Products } from '../product.modal';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  searchProducts: string;

  category=['All products','Electronics','Fashion','Jewellery']

  productItems:Products[]=[]
  switchCondition: string;
  electronics: Products[];
  fashion: Products[];
  jewelery: Products[];
  allProduct: boolean;
  label: ProductLabel;
  
  constructor(private auth:AuthService,private home:HomeService,public dialog: MatDialog, private loading:LoadingService) { }

  ngOnInit(): void {

    this.getAllProducts();
     this.label= new ProductLabel();
  }

  getAllProducts()
  {
    this.loading.loadingSpinnerOn();
    this.home.getAllProduct().subscribe(
      res=>
      {
        this.productItems = res;
        this.loading.loadingSpinnerOff();
        this.productItems.forEach((x:any) => {
          Object.assign(x,{quantity:1,total:x.price})
        });
      }
      
    )
  }

  /* Method takes mat-tab event, compares the index's and filter the products based on category */


  myTabFocusChange(event)
  {
    if(event.index===0)
    {
      this.allProduct = true;
      this.getAllProducts()
    }
     else if(event.index===1){
      this.switchCondition = 'case2'
      this.getAllProducts();
      this.electronics=this.productItems.filter((x)=> x.category.includes(this.category[1].toLowerCase()))
     }
     else if(event.index===2){
      this.switchCondition = 'case3'
      this.getAllProducts();
      this.fashion=this.productItems.filter((x)=> x.category.includes(`clothing`))
     
     }
     else{
      this.switchCondition = 'case4'
      this.getAllProducts();
      this.jewelery=this.productItems.filter((x)=> x.category.includes('jewelery'))
     }
   
  }

  /* Method takes mat-dialog event & prod as param & open the dialog box in DialogComponent */
  
  /**
   * @param event
   * @param prod of type any
   */

  addClickEvent(event,prod:any) : void {

    if(event.type==='click')
     {
      this.dialog.open(DialogComponent, {
        width:'30%',
        data:prod
     })
     }
  
  }

}
