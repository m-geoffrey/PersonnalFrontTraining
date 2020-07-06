import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColibriComponent } from './colibri.component';

describe('ColibriComponent', () => {
  let component: ColibriComponent;
  let fixture: ComponentFixture<ColibriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColibriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
