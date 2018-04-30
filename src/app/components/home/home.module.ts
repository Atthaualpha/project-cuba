import { NgModule } from '@angular/core';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ChaptersComponent } from '../chapters/chapters.component';
import { ChapterService } from '../../services/chapters/chapter.service';
import { CommonModule } from '@angular/common';
import { ChapterDetailComponent } from '../chapter-detail/chapter-detail.component';
import { ChapterModule } from '../chapters/chapter.module';


@NgModule({
  declarations: [ NavigationBarComponent, ChaptersComponent],
  imports: [ CommonModule],
  providers: [ChapterService]
})

export class HomeModule {}

