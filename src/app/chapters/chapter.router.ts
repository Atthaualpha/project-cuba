import { Routes, RouterModule } from '@angular/router';
import { ChaptersComponent } from '../chapters/chapters.component';

const CHAPTER_ROUTER: Routes = [
  {
    path: '',
    component: ChaptersComponent
  }
];

export const chapterRouter = RouterModule.forChild(CHAPTER_ROUTER);
