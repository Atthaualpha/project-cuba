import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { FreqAskComponent } from './freq-ask/freq-ask.component';

import { ChapterService } from './services/chapters/chapter.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    FreqAskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChapterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
