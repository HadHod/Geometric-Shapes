import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AboutRoutingModule
    ],
    declarations: [AboutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
