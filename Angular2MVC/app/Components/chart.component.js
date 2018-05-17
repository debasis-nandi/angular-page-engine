"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChartComponent = (function () {
    function ChartComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.barChartData = [{
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
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.createChart();
    };
    ChartComponent.prototype.createChart = function () {
        this.data = exports.STATISTICS;
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // define X & Y domains
        //let xDomain = this.data.map(d => d[0]);
        //let yDomain = [0, d3.max(this.data, d => d[1])];
        var xDomain = this.data.map(function (d) { return d.letter; });
        var yDomain = [0, d3.max(this.data, function (d) { return d.frequency; })];
        //let yDomain = this.data.map(d => d.frequency);
        debugger;
        // create scales
        this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = d3.scaleLinear().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3.axisLeft(this.yScale));
    };
    __decorate([
        core_1.ViewChild('chart'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChartComponent.prototype, "chartContainer", void 0);
    ChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './chart.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
exports.STATISTICS = [
    { letter: "A", frequency: 10 },
    { letter: "B", frequency: 20 },
    { letter: "C", frequency: 30 },
    { letter: "D", frequency: 40 },
    { letter: "E", frequency: 50 }
];
//# sourceMappingURL=chart.component.js.map