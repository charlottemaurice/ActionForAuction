import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerdoodlemeComponent } from './creerdoodleme.component';

describe('CreerdoodlemeComponent', () => {
  let component: CreerdoodlemeComponent;
  let fixture: ComponentFixture<CreerdoodlemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerdoodlemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerdoodlemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
