import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';


import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule }            from './app/heroes/heroes.module';
import { PageNotFoundComponent }   from './app/not-found.component';


import { DialogService }           from './services/dialog.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,

        PageNotFoundComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
