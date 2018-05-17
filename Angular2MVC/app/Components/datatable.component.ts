import { Component, OnInit, ViewChild } from '@angular/core';

import { CarService, Car } from '../Service/car.service';

@Component({
    moduleId: module.id,
    templateUrl: './datatable.component.html'
})

export class DataTableComponent implements OnInit {

    cars: Car[] = [];
    brands: any;
    colors: any;

    sales: any[];

    frozenCars: Car[];
    totalRecords: number;
    loading: boolean;

    frozenCols: any[];
    scrollableCols: any[];

    constructor(private carService: CarService) {
    }

    ngOnInit() {
        //this.globalSearch();
        //this.colGrouping();
        this.frozeColumn();
    }

    globalSearch() {
        this.carService.getCarsMedium().subscribe(cars => {
            this.cars = cars
        });
    }

    colGrouping() {
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    }

    frozeColumn() {
        this.carService.getCarsMedium().subscribe(cars => {
            this.cars = cars
        });
    }
}