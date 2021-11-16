import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinvitationsComponent } from './listeinvitations.component';

describe('ListeinvitationsComponent', () => {
  let component: ListeinvitationsComponent;
  let fixture: ComponentFixture<ListeinvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeinvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeinvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
