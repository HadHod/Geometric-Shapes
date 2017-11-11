export interface IShape {
    getArea(): number;
    getPerimeter(): number;
}

export class Circle implements IShape {
    constructor (private r: number) {}

    public static getName = 'Circle';

    public getArea = () => Math.PI * this.r * this.r;

    public getPerimeter = () => 2.0 * Math.PI * this.r;
}

export class Rectangle implements IShape {
    constructor (private a: number, private b: number) {}

    public static getName = 'Rectangle';

    public getArea = () => this.a * this.b;

    public getPerimeter = () => 2 * this.a + 2 * this.b;
}

export class Square extends Rectangle implements IShape {
    constructor (a: number) {
        super(a, a);
    }

    public static getName = 'Square';
}
