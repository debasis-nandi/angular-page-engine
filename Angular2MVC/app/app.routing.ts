import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { DataTableComponent } from './components/datatable.component';
import { DbComponent } from './components/db.component';
import { ChartComponent } from './components/chart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'datatable', component: DataTableComponent },
    { path: 'dws', component: DbComponent },
    { path: 'chart', component: ChartComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);