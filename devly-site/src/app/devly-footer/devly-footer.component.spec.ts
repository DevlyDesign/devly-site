import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlyFooterComponent } from './devly-footer.component';

describe('DevlyFooterComponent', () => {
  let component: DevlyFooterComponent;
  let fixture: ComponentFixture<DevlyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
