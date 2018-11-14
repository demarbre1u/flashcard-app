import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardViewerComponent } from './flashcard-viewer.component';

describe('FlashcardViewerComponent', () => {
  let component: FlashcardViewerComponent;
  let fixture: ComponentFixture<FlashcardViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
