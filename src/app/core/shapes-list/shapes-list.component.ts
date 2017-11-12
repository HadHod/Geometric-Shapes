import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Circle, Rectangle, Square } from '../../shared/models/Shapes';


type ComputationType = 'Area' | 'Perimeter';
type Shape = 'Circle' | 'Rectangle' | 'Square'; // Circle.getName | Rectangle.getName | Square.getName

@Component({
    templateUrl: './shapes-list.component.html',
    styleUrls: ['./shapes-list.component.scss']
})
export class ShapesListComponent {
    public computationsTypes: ComputationType[] = ['Area', 'Perimeter'];
    public shapes: Shape[] = ['Circle', 'Rectangle', 'Square'];

    private _computationType: ComputationType;
    private _shape: Shape;

    constructor (
        private _router: Router,
    ) { }

    public set computationType (value: ComputationType) {
        this._computationType = value;
        this.goToShapeDetails();
    }

    public setSelectedShape (value: Shape) {
        this._shape = value;
        this.goToShapeDetails();
    }

    private goToShapeDetails () {
        if (this._computationType && this._shape) {
            this._router.navigate(['/details', this._computationType, this._shape]);
        }
    }

}
