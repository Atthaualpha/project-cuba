import { Component, OnInit, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Article } from '../../models/articles/article';
import { ArticleService } from '../../services/articles/article.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  private subcription: ISubscription;
  articles: Article[];

  @Input()
  set idChapter(idChapter: number) {
    if (idChapter) {
     this.buscarArticulosPorCapitulo(idChapter);
    }
  }

  constructor(private articleService: ArticleService) {}

  ngOnInit() {}

  buscarArticulosPorCapitulo(idChapter: number) {
    this.articleService.buscarArticulosPorCapitulo(idChapter).
    subscribe(articulos => (this.articles = articulos));
  }
}
