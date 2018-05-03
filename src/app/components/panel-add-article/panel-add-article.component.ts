import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/articles/article';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { ShoppingService } from '../../services/shopping/shopping.service';

@Component({
  selector: 'app-panel-add-article',
  templateUrl: './panel-add-article.component.html',
  styleUrls: ['./panel-add-article.component.css']
})
export class PanelAddArticleComponent implements OnInit {

  articulo: Article;
  validateArticle: FormGroup;

  constructor(public shoppingService: ShoppingService) {}

  ngOnInit() {

  }

  abrirModalAdicionar() {
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
}
