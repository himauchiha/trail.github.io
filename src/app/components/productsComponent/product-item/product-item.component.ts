import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  productName: string = "uniform aaahiuo";
  productSize: Array<Number> =[
    32,34,36,38,40,42
  ];
  price: number = 500;
  productDescription: string =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum quam iste consequuntur nesciunt, 
  quis facilis, quibusdam nostrum dolorum sapiente saepe quaerat, dicta culpa temporibus. Nobis, vero.
  Vitae, reprehenderit ut?`;

  constructor() { }

  ngOnInit(): void {
  }

}
