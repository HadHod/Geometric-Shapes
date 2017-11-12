function isGreaterThanZero (n: number) {
    if (n <= 0) {
        throw new Error('bad parameter');
    }

    if (isNaN(+n)) {
        throw new Error('bad parameter');
    }
}

export interface IShape {
    getArea(): number;
    getPerimeter(): number;
}

export class Circle implements IShape {
    constructor (private r: number) {
        isGreaterThanZero(r);
    }

    public static getName = 'Circle';

    public getArea = () => Math.PI * this.r * this.r;

    public getPerimeter = () => 2.0 * Math.PI * this.r;
}

export class Rectangle implements IShape {
    constructor (private a: number, private b: number) {
        isGreaterThanZero(a);
        isGreaterThanZero(b);
    }

    public static getName = 'Rectangle';

    public getArea = () => this.a * this.b;

    public getPerimeter = () => 2 * this.a + 2 * this.b;
}

export class Square extends Rectangle implements IShape {
    constructor (a: number) {
        isGreaterThanZero(a);
        super(a, a);
    }

    public static getName = 'Square';
}
