import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';

import { RootComponent } from './root/root.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    RootComponent,
    RoutingComponents,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2SwapiModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
