import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelsComponent } from './homels.component';

describe('HomelsComponent', () => {
  let component: HomelsComponent;
  let fixture: ComponentFixture<HomelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
