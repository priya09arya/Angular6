import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbDetailsComponent } from './awb-details.component';

describe('AwbDetailsComponent', () => {
  let component: AwbDetailsComponent;
  let fixture: ComponentFixture<AwbDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwbDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
