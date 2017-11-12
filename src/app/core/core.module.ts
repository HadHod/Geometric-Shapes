import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { ShapesListComponent } from './shapes-list/shapes-list.component';
import { ShapesDetailsComponent } from './shapes-details/shapes-details.component';


@NgModule({
    imports: [SharedModule, CoreRoutingModule],
    declarations: [HeaderComponent, ShapesListComponent, ShapesDetailsComponent],
    exports: [HeaderComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
