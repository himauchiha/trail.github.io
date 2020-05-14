import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [1,2,3,4,5,6,7,8,9,10,11];
  pages = [];
  currentPageProducts = [];
  currentPage = 0;
  itemToshowOnPage = 9;
  categories=[
    {
      item:"shirt"
    },
    {
      item:"pant"
    },
    {
      item:"tie"
    },
    {
      item:"belt"
    },
    {
      item:"socks"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.manipulateItemsToView();
  }

  manipulateItemsToView(){
    let pages = 0;
    if(this.products.length>this.itemToshowOnPage){
      pages = Math.floor(this.products.length/this.itemToshowOnPage) + 1;
      for(let index=1; index<=pages; index++){
        this.pages.push(index);
      }
      for(let index=0; index<this.itemToshowOnPage; index++){
        this.currentPageProducts.push(this.products[index]);
      }
      this.currentPage = 1;
    }
  }

  pageSelected(page){
    this.currentPage = page;
    this.currentPageProducts = [];
    let initialIndex = this.itemToshowOnPage*(page-1);
    let itemToshowOnPage = this.itemToshowOnPage;
    if(this.pages[this.pages.length-1]==page){
      itemToshowOnPage = this.products.length - initialIndex;
    }
    for(let index = initialIndex; index < initialIndex + itemToshowOnPage; index++){
      this.currentPageProducts.push(this.products[index]);
    }
  }

}
