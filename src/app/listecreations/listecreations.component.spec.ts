import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecreationsComponent } from './listecreations.component';

describe('ListecreationsComponent', () => {
  let component: ListecreationsComponent;
  let fixture: ComponentFixture<ListecreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
