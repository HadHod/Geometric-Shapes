import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    templateUrl: './shapes-list.component.html',
    styleUrls: ['./shapes-list.component.scss']
})
export class ShapesListComponent implements OnInit {
    public computationsTypes: string[] = ['Area', 'Perimeter'];
    public shapes: string[] = ['Circle', 'Rectangle', 'Square'];

    private _computationType: string;
    private _shape: string;

    constructor (
        private _router: Router,
    ) { }

    ngOnInit () { }

    public set computationType (value: string) {
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
