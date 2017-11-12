import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IShape, Circle, Rectangle, Square } from '../Shapes';


describe('Shapes models', () => {
    it('Circle computations', () => {
        let circle: IShape = new Circle(2);
        expect(circle.getArea().toFixed(2)).toEqual('12.57');
        expect(circle.getPerimeter().toFixed(2)).toEqual('12.57');

        circle = new Circle(4);
        expect(circle.getArea().toFixed(2)).toEqual('50.27');
        expect(circle.getPerimeter().toFixed(2)).toEqual('25.13');
    });

    it('Rectangle computations', () => {
        let rectangle: IShape = new Rectangle(2, 4);
        expect(rectangle.getArea()).toEqual(8);
        expect(rectangle.getPerimeter()).toEqual(12);

        rectangle = new Rectangle(1, 10);
        expect(rectangle.getArea()).toEqual(10);
        expect(rectangle.getPerimeter()).toEqual(22);
    });

    it('Square computations', () => {
        let square: IShape = new Square(2);
        expect(square.getArea()).toEqual(4);
        expect(square.getPerimeter()).toEqual(8);

        square = new Square(9);
        expect(square.getArea()).toEqual(81);
        expect(square.getPerimeter()).toEqual(36);
    });

    it('Negative or zero parameter', () => {
        expect(function() { new Circle(-5) }).toThrow(new Error("bad parameter"));
        expect(function() { new Circle(0) }).toThrow(new Error("bad parameter"));

        expect(function() { new Rectangle(-4, -3) }).toThrow(new Error("bad parameter"));
        expect(function() { new Rectangle(-4, 0) }).toThrow(new Error("bad parameter"));
        expect(function() { new Rectangle(0, -3) }).toThrow(new Error("bad parameter"));
        expect(function() { new Rectangle(0, 0) }).toThrow(new Error("bad parameter"));

        expect(function() { new Square(-3) }).toThrow(new Error("bad parameter"));
        expect(function() { new Square(0) }).toThrow(new Error("bad parameter"));
    });
});
