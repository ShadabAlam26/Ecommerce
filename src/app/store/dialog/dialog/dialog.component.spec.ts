import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let cartService: CartService;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    const popupTitle = 'popup';
    const popupPrice = 100;
    const qtyPrice = 2;
    const descPrice = 'Cart item hello';
    const catPrice = 'Electronics';
    const img = 'Some image links';
    const rat = 12;
    const cont = 20;
    const toTalPrice = 200;
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,MatDialogModule],
      providers:[AppComponent,CartService,MatDialog,{provide:MatDialogRef,useValue:{}},{provide:MAT_DIALOG_DATA,useValue: {
        data: {
          title: popupTitle.toUpperCase(),
          price: popupPrice,
          quantity:qtyPrice,
          description: descPrice,
          category: catPrice,
          image: img,
          rating: {
            rate: rat ,
            count: cont
          },
          total: toTalPrice
        }
      }
    }]
    })
    .compileComponents();
    cartService = TestBed.inject<CartService>(CartService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('popup component val data test', () => {

    const expectedTitle = 'POPUP';
    const expectedBody = 'Cart item hello';
    const expectedPrice = 100

    expect(component.data.data.title).toEqual(expectedTitle.toUpperCase());
    expect(component.data.data.description).toEqual(expectedBody);
    expect(component.data.data.price).toEqual(expectedPrice);

  });


});
