import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models/articles/article';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  Validators
} from '@angular/forms';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { PanelAddArticleService } from '../../services/panelAdd/panel-add-article.service';
import { MessagesEmitService } from '../../services/messages-emit/messages-emit.service';

@Component({
  selector: 'app-panel-add-article',
  templateUrl: './panel-add-article.component.html',
  styleUrls: ['./panel-add-article.component.css']
})
export class PanelAddArticleComponent implements OnInit {
  articulo: Article;
  validateArticle: FormGroup;

  constructor(
    private shoppingService: ShoppingService,
    public panelAddArticle: PanelAddArticleService,
    private messageService: MessagesEmitService
  ) {}

  ngOnInit() {
    this.openPanelAdd();
    this.crearFormValidator();
  }

  crearFormValidator() {
    this.validateArticle = new FormGroup({
      cantidad: new FormControl('', [this.validarCantidades(this.articulo.cantidadMax)])
    });
  }

  adicionarArticulo() {
    if (this.shoppingService.agregarArticulo(this.articulo)) {
      this.messageService.newGrowlMessage(
        'success',
        'Articulo guardado',
        'Los Articulos se encuentran disponibles en el carrito'
      );
      this.panelAddArticle.closePanelAddArticle();
    } else {
      this.messageService.newGrowlMessage(
        'error',
        'Valoración superada ',
        'La valoracion no puede ser mayor a 950 puntos'
      );
    }
  }

  validarCantidades(cantMax: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const cantidadActual = control.value;
      if (cantidadActual > cantMax || cantidadActual === 0) {
        if (cantidadActual > cantMax) {
          this.messageService.newGrowlMessage(
            'error',
            'Cantidad maxima superada',
            'Cantidad no puede ser mayor a ' + cantMax
          );
        }
        return { invalid: true };
      } else {
        return null;
      }
    };
  }

  openPanelAdd() {
    this.articulo = this.panelAddArticle.getArticulo;
    this.articulo.cantidadMax = this.articulo.cantidadMax;
    if (this.articulo !== undefined) {
      const articuloShop = this.shoppingService.obtenerArticulo(
        this.articulo.idCapitulo,
        this.articulo.idArticulo
      );
      if (articuloShop) {
        this.articulo.cantidadActual = articuloShop.cantidadActual;
      } else {
        this.articulo.cantidadActual = 0;
      }
    }
  }
}
