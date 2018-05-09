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
  @SessionStorage('totalPoints') valoracionTotal: number;

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
  agregarArticulo(articulo: Article): boolean {
    this.validarListaArticulos(); // valida que no este vacio
    const indiceArticulo = this.validarExistenciaArticulo(articulo); // valida que exista articulo
    // validar que no supere la valoracion establecida
    if (
      !this.validarTotalValoracion(
        articulo.cantidadActual,
        articulo.valoracion,
        indiceArticulo !== -1
          ? this.articulos[indiceArticulo].cantidadActual
          : 0
      )
    ) {
      if (indiceArticulo !== -1) {
        // si existe articulo
        this.articulos[indiceArticulo].cantidadActual = articulo.cantidadActual;
      } else {
        this.articulos.push(articulo);
      }
      this.articulos = this.articulos;
      return true;
    } else {
      return false;
    }
  }

  /**
   * @description evalua si la valoracion puede ser superada al actualizar los articulos
   * @param cantidadActual
   * @param cantidadMax
   * @param canidadAnterior
   */
  validarTotalValoracion(
    cantidadActual: number,
    valoracionActual: number,
    cantidadAnterior: number
  ): boolean {
    if (cantidadActual > cantidadAnterior) {
      let valoracion = (this.valoracionTotal ? this.valoracionTotal : this.calcularTotalValoracion());
      valoracion += (cantidadActual - cantidadAnterior) * valoracionActual;
      if (valoracion > 900) {
        return true;
      } else {
        this.valoracionTotal = valoracion;
        this.valoracionTotal = this.valoracionTotal;
        return false;
      }
    }
  }

  /**
   * @description valida la existenia de un articulo
   * @param articulo
   */
  validarExistenciaArticulo(articulo: Article): number {
    const indiceArticuloShop = this.obtenerIndiceArticulo(
      articulo.idCapitulo,
      articulo.idArticulo
    );
    if (indiceArticuloShop !== -1) {
      return indiceArticuloShop; // existe articulo
    } else {
      return -1; // no existe articulo
    }
  }

  /**
   * @description elimina un articulo especifico del carrito
   */
  eliminarArticulo(articulo: Article) {
    this.articulos.splice(this.articulos.indexOf(articulo), 1);
    this.articulos = this.articulos;
    // recalculo de la valoracion
    const valoracion = this.calcularTotalValoracion();
    this.valoracionTotal = valoracion;
    this.valoracionTotal = this.valoracionTotal;
  }

  /**
   * @description elimina articulo por indice
   * @param indiceArticulo
   */
  eliminarArticuloPorIndice(indiceArticulo: number) {
    this.articulos.splice(indiceArticulo, 1);
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

  /**
   * calcula el total de valoracion acumulada de acuerdo
   * a valoracion de cada articulo y la cantidad actual de articulos guardados
   */
  calcularTotalValoracion(): number {
    this.validarListaArticulos();
    let totalValoracion = 0;
    this.articulos.forEach(function(articulo) {
      totalValoracion += articulo.valoracion * articulo.cantidadActual;
    });
    return totalValoracion;
  }

  /**
   * @description devuelve la valoracion total actual
   */
  obtenerValoracionTotal(): number {
    return (this.valoracionTotal ? this.valoracionTotal : 0);
  }


  /**
   * @description obtiene un articulo de acuerdo al indice
   * @param indiceArticulo
   */
  obtenerArticuloPorIndice(indiceArticulo: number): Article {
    return this.articulos[indiceArticulo];
  }

  /**
   * @description reversa cambios realizados al no cumplir condicion de valoracion
   * @param indiceArticulo
   * @param valoracionAnterior
   */
  reversarValoracion(indiceArticulo: number, valoracionAnterior: number) {
    if (valoracionAnterior > 0) {
      this.articulos[indiceArticulo].cantidadActual = valoracionAnterior;
    } else {
      this.eliminarArticuloPorIndice(indiceArticulo);
    }
    this.articulos = this.articulos;
  }
}
