import { NgModule  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { ChaptersComponent } from './chapters.component';
import { ChapterService } from '../../services/chapters/chapter.service';
import { CommonModule } from '@angular/common';
import { ChapterDetailComponent } from '../chapter-detail/chapter-detail.component';

@NgModule({
  declarations: [ChapterDetailComponent, ChaptersComponent],
  imports: [FormsModule, CommonModule],
  providers: [ChapterService]
})

export class ChapterModule {}
