import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomDesign';

  successMessage: string;
  errorMessage: string;
  isSuccess: boolean;
  isError: boolean;

  constructor(public route:Router){}

  onClick()
  {
    this.route.navigate(['/login'])
  }

  public setSuccessMessage(message: string) {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 6000);
  }

  public setErrorMessage(message: string) {
    this.errorMessage = message;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }
}
