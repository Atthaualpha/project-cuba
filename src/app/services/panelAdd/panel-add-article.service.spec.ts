import { TestBed, inject } from '@angular/core/testing';

import { PanelAddArticleService } from './panel-add-article.service';

describe('PanelAddArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelAddArticleService]
    });
  });

  it('should be created', inject([PanelAddArticleService], (service: PanelAddArticleService) => {
    expect(service).toBeTruthy();
  }));
});
