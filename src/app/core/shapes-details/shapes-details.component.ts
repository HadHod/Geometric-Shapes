import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { MdSnackBar, OVERLAY_PROVIDERS, ScrollDispatcher } from '@angular/material';

import { IShape, Circle, Rectangle, Square } from '../../shared/models/Shapes';


@Component({
    templateUrl: './shapes-details.component.html',
    styleUrls: ['./shapes-details.component.scss'],
    providers: [MdSnackBar, OVERLAY_PROVIDERS, ScrollDispatcher]
})
export class ShapesDetailsComponent implements OnInit {
    public shapeObject: IShape;
    public computationType: string;
    public shape: string;
    public result: number = null;

    constructor (
        private _route: ActivatedRoute,
        private _snackBar: MdSnackBar
    ) { }

    ngOnInit () {
        this._route.params.subscribe(p => this.init(p));
    }

    private init (params: Params) {
        this.computationType = params['computation'];
        this.shape = params['shape'];
    }

    public inputEvent (value1: number, value2?: number) {
        this.result = null;

        if (!value1 || (this.shape === Rectangle.getName && !value2)) {
            return;
        }

        try {
            switch (this.shape) {
                case Circle.getName: this.shapeObject = new Circle(value1); break;
                case Rectangle.getName: this.shapeObject = new Rectangle(value1, value2); break;
                case Square.getName: this.shapeObject = new Square(value1); break;
            }
        } catch (e) {
            if (e.message === 'bad parameter') {
                this._snackBar.open('Type positive number parameter', 'Close', { duration: 2000 });
            } else {
                console.log(e);
            }
        }

        if (!this.shapeObject) {
            return;
        }

        switch (this.computationType) {
            case 'Area': this.result = this.shapeObject.getArea(); break;
            case 'Perimeter': this.result = this.shapeObject.getPerimeter(); break;
        }

        this.shapeObject = null;
    }

}
