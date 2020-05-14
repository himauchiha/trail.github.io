import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { ContactUsComponent } from './components/formComponents/contact-us/contact-us.component';
import { RegisterUserComponent } from './components/formComponents/register-user/register-user.component';
import { LoginComponent } from './components/formComponents/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductItemComponent } from './components/productsComponent/product-item/product-item.component';
import { ProductListComponent } from './components/productsComponent/product-list/product-list.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"contact-us",
    component: ContactUsComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"registration",
    component: RegisterUserComponent
  },
  {
    path:"uniform",
    component: SchoolListComponent
  },
  {
    path:"uniform/:schoolName",
    component: ProductListComponent
  },
  {
    path:"uniform/:schoolName/:product",
    component: ProductItemComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
