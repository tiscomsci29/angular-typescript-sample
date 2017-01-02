import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav>
      <a routerLink="/welcome" routerLinkActive="active" >Home</a> |
      <a >Admin</a> |
      <a >Login</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {}
