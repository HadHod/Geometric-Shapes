import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ShapesListComponent } from './shapes-list.component';


describe('ShapesListComponent', () => {
    let component: ShapesListComponent;
    let fixture: ComponentFixture<ShapesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShapesListComponent],
            imports: [RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
