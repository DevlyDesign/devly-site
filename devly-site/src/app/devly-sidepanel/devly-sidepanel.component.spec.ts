import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlySidepanelComponent } from './devly-sidepanel.component';

describe('DevlySidepanelComponent', () => {
  let component: DevlySidepanelComponent;
  let fixture: ComponentFixture<DevlySidepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlySidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlySidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
