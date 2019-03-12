import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoomlesComponent } from './hoomles.component';

describe('HoomlesComponent', () => {
  let component: HoomlesComponent;
  let fixture: ComponentFixture<HoomlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoomlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoomlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
