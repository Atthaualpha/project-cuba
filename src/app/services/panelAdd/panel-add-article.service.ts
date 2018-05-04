import { Injectable } from '@angular/core';
import { PanelAddArticleComponent } from '../../components/panel-add-article/panel-add-article.component';
import { Article } from '../../models/articles/article';
@Injectable()
export class PanelAddArticleService {
  constructor() {}

  private display: boolean;

  openPanelAddArticle() {
    return this.display = true;
  }

  closePanelAddArticle() {
    this.display = false;
  }

  get getDisplay(): boolean {
    return this.display;
  }
}
