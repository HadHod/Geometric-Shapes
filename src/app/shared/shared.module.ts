import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule, MatSnackBarModule, MatListModule,
    OVERLAY_PROVIDERS
} from '@angular/material';

const MD_MODULES = [
    MatToolbarModule, MatButtonModule, MatIconModule, MatRadioModule,
    MatSelectModule, MatInputModule, MatSnackBarModule, MatListModule
];

const MODULES = [MD_MODULES, CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [];

const DIRECTIVES = [];

const PIPES = [];

const GUARDS = [];

@NgModule({
    imports: [MODULES],
    declarations: [COMPONENTS, DIRECTIVES, PIPES],
    providers: [GUARDS, OVERLAY_PROVIDERS],
    exports: [MODULES, COMPONENTS, DIRECTIVES, PIPES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
