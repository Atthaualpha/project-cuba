import { Component, OnInit, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Article } from '../../models/articles/article';
import { ArticleService } from '../../services/articles/article.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingService } from '../../services/shopping/shopping.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { PanelAddArticleService } from '../../services/panelAdd/panel-add-article.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  private subcription: ISubscription;
  articles: Article[];
  articuloSeleccionado: Article;
  openModal: boolean;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    public panelAddArticle: PanelAddArticleService
  ) {}

  ngOnInit() {
    this.buscarArticulosPorCapitulo();
  }

  buscarArticulosPorCapitulo() {
    const idChapter = this.route.snapshot.paramMap.get('id');
    this.articleService
      .buscarArticulosPorCapitulo(Number(idChapter))
      .subscribe(articulos => (this.articles = articulos));
  }

  seleccionarArticulo(art: Article) {
    this.panelAddArticle.openPanelAddArticle(art);
  }
}
