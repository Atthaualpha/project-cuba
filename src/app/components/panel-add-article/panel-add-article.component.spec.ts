import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddArticleComponent } from './panel-add-article.component';

describe('PanelAddArticleComponent', () => {
  let component: PanelAddArticleComponent;
  let fixture: ComponentFixture<PanelAddArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAddArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
