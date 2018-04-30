import { Routes, RouterModule } from '@angular/router';
import { ChaptersComponent } from '../chapters/chapters.component';
import { ChapterDetailComponent } from '../chapter-detail/chapter-detail.component';

const CHAPTER_ROUTER: Routes = [
  {
    path: '',
    component: ChaptersComponent
  },
  {
    path: 'detail/:id',
    component: ChapterDetailComponent
  }
];

export const chapterRouter = RouterModule.forChild(CHAPTER_ROUTER);
