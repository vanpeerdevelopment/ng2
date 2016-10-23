import {NgModule}               from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {FormsModule}            from '@angular/forms';
import {HttpModule}             from "@angular/http";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';

import {AppRoutingModule}       from "./app-routing.module";
import {AppComponent}           from "./app.component";
import {HeroDetailComponent}    from "./hero-detail.component";
import {HeroesComponent}        from "./heroes.component";
import {DashboardComponent}     from "./dashboard.component";
import {HeroService}            from "./hero.service";
import {HeroSearchComponent}    from "./hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}