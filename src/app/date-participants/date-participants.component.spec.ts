import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateParticipantsComponent } from './date-participants.component';

describe('DateParticipantsComponent', () => {
  let component: DateParticipantsComponent;
  let fixture: ComponentFixture<DateParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
