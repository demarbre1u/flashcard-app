import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectionAlertComponent } from './add-collection-alert.component';

describe('AddCollectionAlertComponent', () => {
  let component: AddCollectionAlertComponent;
  let fixture: ComponentFixture<AddCollectionAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollectionAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollectionAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
