import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routComp } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { HomeService } from './service/home.service';
import { SnackBarPositionExample } from './common-moda';
import { AuthService } from './service/auth.service';
import {GooglePayButtonModule} from '@google-pay/button-angular';
import { MaterialModuleModule } from './material-module/material-module.module';
@NgModule({
  declarations: [
    AppComponent,
    routComp,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePayButtonModule,
    MaterialModuleModule
  ],
  providers: [HomeService,SnackBarPositionExample,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
