import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetScoreComponent } from './get-score.component';

describe('GetScoreComponent', () => {
  let component: GetScoreComponent;
  let fixture: ComponentFixture<GetScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
