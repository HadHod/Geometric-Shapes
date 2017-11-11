import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Circle, Rectangle, Square } from '../../shared/models/Shapes';


type ComputationType = 'Area' | 'Perimeter';
type Shapes = 'Circle' | 'Rectangle' | 'Square';

@Component({
    templateUrl: './shapes-list.component.html',
    styleUrls: ['./shapes-list.component.scss']
})
export class ShapesListComponent implements OnInit {
    public computationsTypes: ComputationType[] = ['Area', 'Perimeter'];
    public shapes: string[] = [Circle.getName, Rectangle.getName, Square.getName];

    private _computationType: ComputationType;
    private _shape: string;

    constructor (
        private _router: Router,
    ) { }

    ngOnInit () { }

    public set computationType (value: ComputationType) {
        this._computationType = value;
        this.goToShapeDetails();
    }

    public setSelectedShape (value: string) {
        this._shape = value;
        this.goToShapeDetails();
    }

    private goToShapeDetails () {
        if (this._computationType && this._shape) {
            this._router.navigate(['/details', this._computationType, this._shape]);
        }
    }

}
