import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperoComponent } from './prospero.component';

describe('ProsperoComponent', () => {
  let component: ProsperoComponent;
  let fixture: ComponentFixture<ProsperoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsperoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsperoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
