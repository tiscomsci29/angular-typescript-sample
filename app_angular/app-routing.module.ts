import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent }    from './app/not-found.component';

// import { CanDeactivateGuard }       from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
// import { SelectivePreloadingStrategy }   from './selective-preloading-strategy';


const appRoutes: Routes = [
    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { preloadingStrategy: SelectivePreloadingStrategy }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // SelectivePreloadingStrategy
    ]
})

export class AppRoutingModule {}