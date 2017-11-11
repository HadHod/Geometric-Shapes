import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule
} from '@angular/material';

const MD_MODULES = [
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule
];

const MODULES = [
    MD_MODULES, CommonModule, FormsModule, ReactiveFormsModule
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
