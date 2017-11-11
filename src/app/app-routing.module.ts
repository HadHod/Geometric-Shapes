import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
