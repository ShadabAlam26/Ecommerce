import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../modal/user.modal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*Test Environment */
  private _loginUrl = "http://localhost:3000/registerUsers";

  constructor(private http: HttpClient,private route: Router) { }

  loginUser():Observable<User[]>
  {
     return this.http.get<User[]>(this._loginUrl);
  }

  /* This method collect token from localStorage and return boolean value if user is there or not.*/
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  logoutEcomm()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('name')
    this.route.navigate(['/login'])
  }

}
