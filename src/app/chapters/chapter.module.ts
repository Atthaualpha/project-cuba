import { NgModule  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { ChaptersComponent } from './chapters.component';
import { chapterRouter } from '../chapters/chapter.router';
import { ChapterService } from '../services/chapters/chapter.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChaptersComponent],
  imports: [chapterRouter, FormsModule, CommonModule],
  providers: [ChapterService]
})

export class ChapterModule {}
