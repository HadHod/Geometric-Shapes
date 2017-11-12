import { Component } from '@angular/core';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public principles: any[] = [{
        name: 'Single responsibility principle',
        description: 'a class should have only a single responsibility'
    }, {
        name: 'Open/closed principle',
        description: 'software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification'
    }, {
        name: 'Liskov substitution principle',
        description: 'objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.'
    }, {
        name: 'Interface segregation principle',
        description: 'many client-specific interfaces are better than one general-purpose interface.'
    }, {
        name: 'Dependency inversion principle',
        description: 'one should “depend upon abstractions, [not] concretions.'
    }];

    constructor() { }

}
