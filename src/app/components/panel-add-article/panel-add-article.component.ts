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
  articuloTemp: Article;

  constructor(
    private shoppingService: ShoppingService,
    public panelAddArticle: PanelAddArticleService,
    private messageService: MessagesEmitService
  ) {}

  ngOnInit() {}

  crearFormValidator() {
    this.validateArticle = new FormGroup({
      cantidad: new FormControl('', [
        this.validarCantidades(this.articulo.cantidadMax)
      ])
    });
  }

  adicionarArticulo() {
    this.articulo.cantidadActual = this.articuloTemp.cantidadActual;
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
        'Valoración superada ' + this.shoppingService.obtenerValoracionTotal(),
        'La valoracion no puede ser mayor a 900 puntos'
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
      }
    };
  }

  @Input()
  set openPanelAdd(art: Article) {
    this.articulo = art;
    this.articuloTemp = new Article();
    this.articuloTemp.cantidadMax = this.articulo.cantidadMax;
    if (this.articulo !== undefined) {
      const articuloShop = this.shoppingService.obtenerArticulo(
        this.articulo.idCapitulo,
        this.articulo.idArticulo
      );
      if (articuloShop) {
        this.articuloTemp.cantidadActual = articuloShop.cantidadActual;
      } else {
        this.articuloTemp.cantidadActual = 0;
      }
    }
    this.crearFormValidator();
  }
}
