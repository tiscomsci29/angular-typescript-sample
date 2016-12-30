import {Component} from '@angular/core';

@Component({
    selector : 'hello-world',
    template : `<h1>Hello World!!! :: {{ nameNaJa }}</h1>`,
})


export class App {

    public nameNaJa:string = 'Tis';


}