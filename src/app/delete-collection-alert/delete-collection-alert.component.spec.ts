import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCollectionAlertComponent } from './delete-collection-alert.component';

describe('DeleteCollectionAlertComponent', () => {
  let component: DeleteCollectionAlertComponent;
  let fixture: ComponentFixture<DeleteCollectionAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCollectionAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCollectionAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
