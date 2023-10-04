import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocumentForReviewComponent } from './view-document-for-review.component';

describe('ViewDocumentForReviewComponent', () => {
  let component: ViewDocumentForReviewComponent;
  let fixture: ComponentFixture<ViewDocumentForReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDocumentForReviewComponent]
    });
    fixture = TestBed.createComponent(ViewDocumentForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
