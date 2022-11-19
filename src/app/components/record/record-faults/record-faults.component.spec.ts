import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFaultsComponent } from './record-faults.component';

describe('RecordFaultsComponent', () => {
  let component: RecordFaultsComponent;
  let fixture: ComponentFixture<RecordFaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordFaultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
