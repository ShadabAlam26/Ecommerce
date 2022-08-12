import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path:"",
    redirectTo:"/login",
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  
  /*Lazy loading implented for Store Module*/
  {
      path:"store",
      loadChildren:()=> import('./store/store.module').then(m=>m.StoreModule),
      canActivate:[AuthGuard]
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routComp = [LoginComponent,PageNotFoundComponent]
