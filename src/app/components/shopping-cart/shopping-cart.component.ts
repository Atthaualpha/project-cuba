import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/articles/article';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { Location } from '@angular/common';
import { PanelAddArticleService } from '../../services/panelAdd/panel-add-article.service';
import { MessagesEmitService } from '../../services/messages-emit/messages-emit.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  articuloSeleccionado: Article;
  valoracionTotal: number;

  constructor(
    public shoppingService: ShoppingService,
    public panelAddArticle: PanelAddArticleService,
    private location: Location,
    private messageService: MessagesEmitService
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
    this.messageService.newGrowlMessage('success', 'Articulo eliminado!', '');
  }

  seleccionarArticulo(art: Article) {
    this.panelAddArticle.openPanelAddArticle(art);
  }
}
