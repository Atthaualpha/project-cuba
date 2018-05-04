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

  validarListaArticulos() {
    if (!this.articulos) {
      this.articulos = [];
    }
  }

  /**
   * @description agrega un nuevo articulo al carrito
   * @param articulo
   */
  agregarArticulo(articulo: Article) {
    this.validarListaArticulos();
    this.validarExistenciaArticulo(articulo);
    this.articulos = this.articulos;
  }

  /**
   * @description valida la existenia de un articulo, si existe lo actualiza, si no lo crea
   * @param articulo
   */
  validarExistenciaArticulo(articulo: Article) {
    const indiceArticuloShop = this.obtenerIndiceArticulo(
      articulo.idCapitulo,
      articulo.idArticulo
    );
    if (indiceArticuloShop !== -1) {
      this.articulos[indiceArticuloShop] = articulo;
    } else {
      this.articulos.push(articulo);
    }
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
  obtenerArticulos(): Article[] {
    return this.articulos;
  }

  /**
   * @description devuelve un articulo especifico
   * @param art @
   */
  obtenerArticulo(idCap: number, idArt: number): Article {
    this.validarListaArticulos();
    return this.articulos.find(function(art) {
      return art.idCapitulo === idCap && art.idArticulo === idArt;
    });
  }

  /**
   *
   * @returns devuelve el indice de un articulo especifico
   * @description busca un articulo especifico dentro de la lista
   * @param idCap
   * @param idArt
   */
  obtenerIndiceArticulo(idCap: number, idArt: number): number {
    this.validarListaArticulos();
    return this.articulos.findIndex(function(art, index) {
      return art.idCapitulo === idCap && art.idArticulo === idArt;
    });
  }

  calcularTotalValoracion(): number {
    this.validarListaArticulos();
    let totalValoracion = 0;
    this.articulos.forEach(function(articulo) {
      totalValoracion += articulo.valoracion * articulo.cantidadActual;
    });
    return totalValoracion;
  }
}
