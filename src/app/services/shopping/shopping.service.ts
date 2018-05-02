import { Injectable } from '@angular/core';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { Article } from '../../models/articles/article';
import { SessionStorageService, SessionStorage } from 'ngx-webstorage';

@Injectable()
export class ShoppingService {
  /**
   * Lista de articulos dentro del carrito almacenado en memoria session storage
   */
  @SessionStorage('shopcart') articulos: Article[];

  constructor() {}

  /**
   * @description agrega un nuevo articulo al carrito
   * @param articulo
   */
  agregarArticulo(articulo: Article) {
    if (!this.articulos) {
      this.articulos = [];
    }
    this.articulos.push(articulo);
    this.articulos = this.articulos;
  }

  /**
   * @description elimina un articulo especifico del carrito
   */
  eliminarArticulo(articulo: Article) {
    this.articulos.splice(this.articulos.indexOf(articulo), 1);
    this.articulos = this.articulos;
  }

  /**
   * @description devuelve la lista de articulos del carrito
   */
  obtenerArticulo(): Article[] {
    return this.articulos;
  }
}
