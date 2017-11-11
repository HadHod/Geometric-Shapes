import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapesListComponent } from './shapes-list/shapes-list.component';
import { ShapesDetailsComponent } from './shapes-details/shapes-details.component';


const routes: Routes = [{
    path: 'list',
    component: ShapesListComponent
}, {
    path: 'details/:id',
    component: ShapesDetailsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
