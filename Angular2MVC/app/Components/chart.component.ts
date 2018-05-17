import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

declare var d3: any;

@Component({
    moduleId: module.id,
    templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
    
    @ViewChild('chart') private chartContainer: ElementRef;

    private chartData: Array<any>;
    private data: Array<any>;
    private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private colors: any;
    private xAxis: any;
    private yAxis: any;

    public barChartData = [{
        id: 0,
        label: 'label name',
        value1: 10,
        value2: 12,
        value3: 15,
        valuen: 20
    }, {
        id: 1,
        label: 'label name',
        value1: 11,
        value2: 22,
        value3: 33,
        valuen: 44
    }];

    constructor() { }

    ngOnInit() {
        this.createChart();
    }
    
    createChart() {
        this.data = STATISTICS;

        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        let svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);

        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // define X & Y domains
        //let xDomain = this.data.map(d => d[0]);
        //let yDomain = [0, d3.max(this.data, d => d[1])];
        let xDomain = this.data.map(d => d.letter);
        let yDomain = [0, d3.max(this.data, d => d.frequency)];
        //let yDomain = this.data.map(d => d.frequency);

        debugger;
        // create scales
        this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

        // bar colors
        this.colors = d3.scaleLinear().domain([0, this.data.length]).range(<any[]>['red', 'blue']);

        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
            .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
            .call(d3.axisLeft(this.yScale));
    }

}

export interface Frequency {
    letter: string,
    frequency: number
}

export const STATISTICS: Frequency[] = [
    { letter: "A", frequency: 10 },
    { letter: "B", frequency: 20 },
    { letter: "C", frequency: 30 },
    { letter: "D", frequency: 40 },
    { letter: "E", frequency: 50 }
];