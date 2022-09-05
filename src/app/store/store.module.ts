import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductsComponent } from './products/products.component';
import { AuthService } from '../service/auth.service';
import { HomeService } from '../service/home.service';
import { FilterPipe } from '../pipe/filter.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { CartComponent } from './cart/cart.component';
import {GooglePayButtonModule} from '@google-pay/button-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { LoadingComponent } from '../loading/loading.component';


@NgModule({
  declarations: 
  [StoreComponent,
     ProductsComponent,
     FilterPipe,
     DialogComponent,
     CartComponent,
     ProfileComponent,
     LoadingComponent
  ],
  imports: [
    CommonModule,
    GooglePayButtonModule,
    StoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    FormsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatBadgeModule,
   
    
  ],
  providers: [AuthService,HomeService],
})
export class StoreModule { }
