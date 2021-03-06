﻿import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service';
import { DataTableComponent  } from './components/datatable.component';
import { CarService } from './Service/car.service';
import { DataTableModule, PaginatorModule, FileUploadModule } from 'primeng/primeng';
import { DbComponent } from './components/db.component';
import { DynamicFormComponent } from './page-engine/dynamic.component';
import { PageEngineComponent } from './page-engine/page-engine.component';
import { PageEngineService } from './page-engine/page-engine.service';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartComponent } from './components/chart.component';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { LoginComponent } from './components/login.component';

//import { AdalService } from 'ng2-adal/dist/core';
//import { AdalService } from "ng2-adal/dist/services/adal.service";
import { LoggedInGuard } from './guard/login.guard';
import { SecretService } from './service/login.service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        Ng2Bs3ModalModule,
        DataTableModule,
        PaginatorModule,
        FileUploadModule,
        MyDatePickerModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        HomeComponent,
        DataTableComponent,
        DbComponent,
        DynamicFormComponent,
        PageEngineComponent,
        //BarChartComponent,
        ChartComponent,
        LoginComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService,
        CarService,
        PageEngineService,
        //AdalService,
        //SecretService,
        //LoggedInGuard
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule { }
