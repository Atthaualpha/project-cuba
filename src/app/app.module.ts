import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { FreqAskComponent } from './freq-ask/freq-ask.component';


@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    FreqAskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
