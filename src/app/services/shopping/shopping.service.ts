import { Injectable } from '@angular/core';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { Article } from '../../models/articles/article';
import { SessionStorageService, SessionStorage } from 'ngx-webstorage';

@Injectable()
export class ShoppingService {


  @SessionStorage('shopcart')
  articulos: Article[];

  constructor() {}

  agregarArticulo(articulo: Article) {

    this.articulos = this.obtenerArticulo();
    if (!this.articulos) {
      this.articulos = [];
    }
    this.articulos.push(articulo);
    this.articulos = this.articulos;
  }

  eliminarArticulo(articulo: Article) {
    this.articulos = this.obtenerArticulo();
    delete this.articulos[0];
  }

  obtenerArticulo(): Article[] {
    return this.articulos;
  }
}
