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
    public result: number = null;

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
        this.result = null;

        if (!value1) {
            return;
        }

        try {
            switch (this.shape) {
                case Circle.getName: this.shapeObject = new Circle(value1); break;
                case Rectangle.getName: this.shapeObject = new Rectangle(value1, value2); break;
                case Square.getName: this.shapeObject = new Square(value1); break;
            }
        } catch (e) {
            alert(e);
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
