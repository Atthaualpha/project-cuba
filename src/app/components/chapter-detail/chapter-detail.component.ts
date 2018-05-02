import { Component, OnInit, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Article } from '../../models/articles/article';
import { ArticleService } from '../../services/articles/article.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  private subcription: ISubscription;
  articles: Article[];
  articulo: Article;

  cantidadArt: number;
  validateArticle: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    public shoppingService: ShoppingService
  ) {}

  ngOnInit() {
    this.buscarArticulosPorCapitulo();
    this.validateArticle = new FormGroup({
      'cantidad': new FormControl(this.cantidadArt, [Validators.required, validarCantidad])
    });
  }



  buscarArticulosPorCapitulo() {
    const idChapter = this.route.snapshot.paramMap.get('id');
    this.articleService
      .buscarArticulosPorCapitulo(Number(idChapter))
      .subscribe(articulos => (this.articles = articulos));
  }

  seleccionarArticulo(art: Article) {
    this.articulo = art;
  }

  adicionarArticulo() {
    this.shoppingService.agregarArticulo(this.articulo);
  }
}

function validarCantidad(control: FormControl) {
  const cantidad = control.value;
  if (cantidad > 5 || cantidad === 0) {
    return {
      errorcant: {
        invalid: cantidad
      }
    };
  }
  return null;
}

function emailDomainValidator(control: FormControl) {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    const [_, domain] = email.split('@');
    if (domain !== 'codecraft.tv') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    }
  }
  return null;
}
