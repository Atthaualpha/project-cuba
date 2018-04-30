import { Component, OnInit, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Article } from '../../models/articles/article';
import { ArticleService } from '../../services/articles/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  private subcription: ISubscription;
  articles: Article[];


  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) {}

  ngOnInit() {
    this.buscarArticulosPorCapitulo();
  }

  buscarArticulosPorCapitulo() {
    const idChapter = this.route.snapshot.paramMap.get('id');
    this.articleService.buscarArticulosPorCapitulo(Number(idChapter)).
    subscribe(articulos => (this.articles = articulos));
  }
}
