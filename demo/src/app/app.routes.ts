/**
 * Created by sebastianfuss on 03.09.16.
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {SimpleScrollComponent} from './simple-scroll/simple-scroll.component';
import {HomeComponent} from './home/home.component';
import {NestedScrollComponent} from './nested-scroll/nested-scroll.component';
import {TranslatedTargetScrollComponent} from './translated-target-scroll/translated-target-scroll.component';
import {PathologicalTestsComponent} from './pathological-tests/pathological-tests.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'simple', component: SimpleScrollComponent},
    {path: 'nested', component: NestedScrollComponent},
    {path: 'translated', component: TranslatedTargetScrollComponent},
    {path: 'tests', component: PathologicalTestsComponent},
    {path: '**', redirectTo: '/'},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);