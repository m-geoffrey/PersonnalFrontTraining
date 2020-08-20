import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitylifeComponent } from './citylife.component';

describe('CitylifeComponent', () => {
  let component: CitylifeComponent;
  let fixture: ComponentFixture<CitylifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitylifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
