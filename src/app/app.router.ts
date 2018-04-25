import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: 'chapter',
    loadChildren: '../app/chapters/chapter.module#ChapterModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
