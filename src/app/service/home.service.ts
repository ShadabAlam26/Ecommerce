import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modal/user.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  /*Fetching all the products detail*/ 

  getAllProduct()
  {
    return this.http.get<any>(this._productsUrl)
  }

}
