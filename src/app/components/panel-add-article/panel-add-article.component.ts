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
    public panelAddArticle: PanelAddArticleService
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
    this.shoppingService.agregarArticulo(this.articulo);
  }

  validarCantidades(cantMax: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const cantidadActual = control.value;
      if (cantidadActual > cantMax || cantidadActual === 0) {
        return { invalid: true };
      }
    };
  }

  @Input()
  set openPanelAdd(art: Article) {
    this.articulo = art;
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
    this.crearFormValidator();
  }
}
