import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

declare var d3: any;

@Component({
    moduleId: module.id,
    templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {

    // ADD CHART OPTIONS. 
    chartOptions = {
        responsive: true
    }

    labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    // STATIC DATA FOR THE CHART IN JSON FORMAT.
    chartData = [
        {
            label: '1st Year',
            data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59]
        },
        {
            label: '2nd Year',
            data: [47, 9, 28, 54, 77, 51, 24]
        }
    ];

    // CHART COLOR.
    colors = [
        { // 1st Year.
            backgroundColor: 'rgba(77,83,96,0.2)'
        },
        { // 2nd Year.
            backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }
    ]

    constructor() { }

    ngOnInit() {
    }

    // CHART CLICK EVENT.
    onChartClick(event) {
        console.log(event);
    }

}