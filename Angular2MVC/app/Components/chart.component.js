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
        // ADD CHART OPTIONS. 
        this.chartOptions = {
            responsive: true
        };
        this.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        // STATIC DATA FOR THE CHART IN JSON FORMAT.
        this.chartData = [
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
        this.colors = [
            {
                backgroundColor: 'rgba(77,83,96,0.2)'
            },
            {
                backgroundColor: 'rgba(30, 169, 224, 0.8)'
            }
        ];
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    // CHART CLICK EVENT.
    ChartComponent.prototype.onChartClick = function (event) {
        console.log(event);
    };
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
//# sourceMappingURL=chart.component.js.map