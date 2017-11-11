import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesDetailsComponent } from './shapes-details.component';

describe('ShapesDetailsComponent', () => {
  let component: ShapesDetailsComponent;
  let fixture: ComponentFixture<ShapesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
