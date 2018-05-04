import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/articles/article';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    public shoppingService: ShoppingService,
    private location: Location
  ) {}

  ngOnInit() {
    this.obtenerArticulos();
  }

  obtenerArticulos(): Article[] {
    return this.shoppingService.obtenerArticulos();
  }

  volverAtras() {
    this.location.back();
  }

  eliminarArticulo(articulo: Article) {
    this.shoppingService.eliminarArticulo(articulo);
  }
}
