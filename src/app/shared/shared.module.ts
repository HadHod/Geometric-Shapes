import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const MODULES = [
    CommonModule,
];

const COMPONENTS = [

];

const DIRECTIVES = [

];

const PIPES = [

];

const GUARDS = [

];

@NgModule({
    imports: [
        MODULES
    ],
    declarations: [
        COMPONENTS, DIRECTIVES, PIPES
    ],
    providers: [
        GUARDS
    ],
    exports: [
        MODULES, COMPONENTS, DIRECTIVES, PIPES
    ]
})
export class SharedModule { }
