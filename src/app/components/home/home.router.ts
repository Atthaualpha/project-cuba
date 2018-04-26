import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ChaptersComponent } from '../chapters/chapters.component';

const HOME_ROUTER: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chapter',
    loadChildren: '../chapters/chapter.module#ChapterModule'
  }
];

export const homeRouter = RouterModule.forChild(HOME_ROUTER);
