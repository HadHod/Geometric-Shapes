import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesListComponent } from './shapes-list.component';

describe('ShapesListComponent', () => {
  let component: ShapesListComponent;
  let fixture: ComponentFixture<ShapesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
