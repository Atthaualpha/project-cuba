import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';
import { FreqAskComponent } from './components/freq-ask/freq-ask.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ChapterService } from './services/chapters/chapter.service';
import { ArticleService } from './services/articles/article.service';
import { AppRouter } from './app.router';
import {SpinnerModule} from 'primeng/spinner';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    FreqAskComponent,
    NavigationBarComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouter,
    SpinnerModule
  ],
  providers: [ChapterService, ArticleService, ShoppingCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
