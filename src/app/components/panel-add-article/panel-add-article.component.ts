import { Component, OnInit, Input } from '@angular/core';
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

  displayPanelAdd: boolean;
  articulo: Article;
  validateArticle: FormGroup;

  constructor(private shoppingService: ShoppingService) {}

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
    console.log('entro');
    this.displayPanelAdd = true;
    this.articulo = art;
    const articuloShop = this.shoppingService.obtenerArticulo(
      art.idCapitulo,
      art.idArticulo
    );
    if (articuloShop) {
      this.articulo.cantidadActual = articuloShop.cantidadActual;
    } else {
      this.articulo.cantidadActual = 0;
    }
    this.crearFormValidator();
  }

  closePanelAdd() {
    this.displayPanelAdd = false;
  }
}
