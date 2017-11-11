import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

const MD_MODULES = [
    MatToolbarModule, MatButtonModule, MatIconModule
];

const MODULES = [
    MD_MODULES, CommonModule,
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
