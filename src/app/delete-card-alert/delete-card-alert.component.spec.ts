import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardAlertComponent } from './delete-card-alert.component';

describe('DeleteCardAlertComponent', () => {
  let component: DeleteCardAlertComponent;
  let fixture: ComponentFixture<DeleteCardAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCardAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
