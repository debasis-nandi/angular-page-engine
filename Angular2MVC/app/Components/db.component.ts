import { Component, OnInit, ViewChild } from '@angular/core';
import { person } from '../page-engine/pagedata';
import { PageEngineService } from '../page-engine/page-engine.service';


@Component({
    moduleId: module.id,
    templateUrl: './db.component.html'
})

export class DbComponent implements OnInit {

    person: any;
    dbControls: any;

    constructor(private service: PageEngineService) {
        //this.person = person;
    }

    ngOnInit() {
        this.service.getPageMetaData().subscribe(data => {
            this.dbControls = data;
            this.dbControls.data = this.dbControls.data.sort((n1: any, n2: any) => n1.order - n2.order);
        });
    }
    
}