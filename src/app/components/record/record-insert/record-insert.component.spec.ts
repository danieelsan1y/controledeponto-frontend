import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordInsertComponent } from './record-insert.component';

describe('RecordInsertComponent', () => {
  let component: RecordInsertComponent;
  let fixture: ComponentFixture<RecordInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
