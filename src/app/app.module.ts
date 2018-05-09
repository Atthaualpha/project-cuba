import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';
import { FreqAskComponent } from './components/freq-ask/freq-ask.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ChapterService } from './services/chapters/chapter.service';
import { ArticleService } from './services/articles/article.service';
import { AppRouter } from './app.router';
import {
  SpinnerModule,
  MessageModule,
  DialogModule,
  ButtonModule,
  InputTextModule,
  TooltipModule,
  MessagesModule,
  GrowlModule
} from 'primeng/primeng';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingService } from './services/shopping/shopping.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { PanelAddArticleComponent } from './components/panel-add-article/panel-add-article.component';
import { PanelAddArticleService } from './services/panelAdd/panel-add-article.service';
import { MessagesComponent } from './components/messages/messages.component';
<<<<<<< HEAD
=======
import { MessagesEmitService } from './services/messages-emit/messages-emit.service';
>>>>>>> 01197c45e2260e24f58e968b964a55f7a3725f26

@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    FreqAskComponent,
    NavigationBarComponent,
    ShoppingCartComponent,
    PanelAddArticleComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    HttpClientModule,
    AppRouter,
    SpinnerModule,
    Ng2Webstorage,
    MessageModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    MessagesModule,
    GrowlModule
  ],
  providers: [
    ChapterService,
    ArticleService,
    ShoppingService,
<<<<<<< HEAD
    PanelAddArticleService
=======
    PanelAddArticleService,
    MessagesEmitService
>>>>>>> 01197c45e2260e24f58e968b964a55f7a3725f26
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
