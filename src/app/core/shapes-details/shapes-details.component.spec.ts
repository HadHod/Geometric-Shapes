import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ShapesDetailsComponent } from './shapes-details.component';


describe('ShapesDetailsComponent', () => {
    let component: ShapesDetailsComponent;
    let fixture: ComponentFixture<ShapesDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShapesDetailsComponent],
            imports: [RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShapesDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO Error: No provider for Platform!
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
