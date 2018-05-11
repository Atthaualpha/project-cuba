export class Article {
  idCapitulo: number;
  idArticulo: number;
  idItem: number;
  nombre: string;
  unidadMedida: string;
  cantidadMax: number;
  observacion: string;
  valoracion: number;
  cantidadActual: number;

  constructor() {}

  construct(articulo: Article) {
    this.idCapitulo = articulo.idCapitulo;
    this.idArticulo = articulo.idArticulo;
    this.idItem = articulo.idItem;
    this.nombre = articulo.nombre;
    this.unidadMedida = articulo.unidadMedida;
    this.cantidadMax = articulo.cantidadMax;
    this.observacion = articulo.observacion;
    this.valoracion = articulo.valoracion;
    this.cantidadActual = articulo.cantidadActual;
  }
}
