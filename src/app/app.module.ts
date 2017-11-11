import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


const MODULES = [
    BrowserModule, BrowserAnimationsModule,
    CoreModule, SharedModule, AppRoutingModule
];

const SERVICES = [];

const GUARDS = [];

@NgModule({
    declarations: [AppComponent],
    imports: [MODULES],
    providers: [SERVICES, GUARDS],
    bootstrap: [AppComponent]
})
export class AppModule { }
