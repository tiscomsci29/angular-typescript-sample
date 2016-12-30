import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { App }  from './app';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, App ],
    bootstrap:    [ AppComponent, App ]
})
export class AppModule { }
