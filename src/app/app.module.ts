import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/formComponents/register-user/register-user.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/productsComponent/product-item/product-item.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { ContactUsComponent } from './components/formComponents/contact-us/contact-us.component';
import { LoginComponent } from './components/formComponents/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/productsComponent/product-list/product-list.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HeaderComponent,
    ProductItemComponent,
    SchoolListComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
