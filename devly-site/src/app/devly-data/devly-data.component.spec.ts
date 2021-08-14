import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlyDataComponent } from './devly-data.component';

describe('DevlyDataComponent', () => {
  let component: DevlyDataComponent;
  let fixture: ComponentFixture<DevlyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
