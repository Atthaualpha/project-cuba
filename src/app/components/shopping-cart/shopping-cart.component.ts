import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/articles/article';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }


  articulos: Article[] = [];

  ngOnInit() {
  }

  adicionarArticulos(articulo: Article) {
    this.articulos.push(articulo);
  }

}
