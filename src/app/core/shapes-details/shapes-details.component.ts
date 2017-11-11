import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { IShape, Circle, Rectangle, Square } from '../../shared/models/Shapes';


@Component({
    templateUrl: './shapes-details.component.html',
    styleUrls: ['./shapes-details.component.scss']
})
export class ShapesDetailsComponent implements OnInit {
    public shapeObject: IShape;
    public computationType: string;
    public shape: string;
    public result: number = 0;

    constructor (
        private _route: ActivatedRoute
    ) { }

    ngOnInit () {
        this._route.params.subscribe(p => this.init(p));
    }

    private init (params: Params) {
        this.computationType = params['computation'];
        this.shape = params['shape'];
    }

    public inputEvent (value1: number, value2?: number) {
        console.log(value1, value2);

        if (!value1) {
            return;
        }

        if (this.shape === Circle.getName) {
            this.shapeObject = new Circle(value1);
        }

        if (this.shape === Rectangle.getName && value2) {
            this.shapeObject = new Rectangle(value1, value2);
        }

        if (this.shape === Square.getName) {
            this.shapeObject = new Square(value1);
        }

        if (!this.shapeObject) {
            this.result = null;
            return;
        }

        switch (this.computationType) {
            case 'Area': this.result = this.shapeObject.getArea(); break;
            case 'Perimeter': this.result = this.shapeObject.getPerimeter(); break;
            default: this.result = null;
        }

        this.shapeObject = null;
    }

}
