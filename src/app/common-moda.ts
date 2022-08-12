
import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Injectable()
export class SnackBarPositionExample {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
  
    constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar(x: string,y:string) {
      this._snackBar.open(x,y, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: [y==='Try again!!'?'red-snackbar':'blue-snackbar']
      });
    }
  }