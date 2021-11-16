import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitlatifComponent } from './recapitlatif.component';

describe('RecapitlatifComponent', () => {
  let component: RecapitlatifComponent;
  let fixture: ComponentFixture<RecapitlatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapitlatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitlatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
