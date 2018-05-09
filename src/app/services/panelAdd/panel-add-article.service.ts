import { Injectable } from '@angular/core';
import { PanelAddArticleComponent } from '../../components/panel-add-article/panel-add-article.component';
import { Article } from '../../models/articles/article';
@Injectable()
export class PanelAddArticleService {
  constructor() {}

  private display: boolean;
  private articulo: Article;

  openPanelAddArticle(art: Article) {
    this.articulo = new Article;
    this.articulo.cantidadActual = art.cantidadActual;
    this.articulo.cantidadMax = art.cantidadMax;
    this.articulo.nombre = art.nombre;
    this.articulo.idArticulo = art.idArticulo;
    this.articulo.idCapitulo = art.idCapitulo;
    this.articulo.valoracion = art.valoracion;
    this.articulo.unidadMedida = art.unidadMedida;
    this.articulo.observacion = art.observacion;
    return this.display = true;
  }

  closePanelAddArticle() {
    this.display = false;
  }

  get getDisplay(): boolean {
    return this.display;
  }

  get getArticulo(): Article {
    return this.articulo;
  }
}
