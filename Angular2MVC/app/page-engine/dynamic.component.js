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
var forms_1 = require('@angular/forms');
var DynamicFormComponent = (function () {
    function DynamicFormComponent() {
    }
    DynamicFormComponent.prototype.ngOnChanges = function () {
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.objectProps =
            Object.keys(this.dataObject)
                .map(function (prop) {
                return Object.assign({}, { key: prop }, _this.dataObject[prop]);
            });
        // setup the form
        var formGroup = {};
        for (var _i = 0, _a = Object.keys(this.dataObject); _i < _a.length; _i++) {
            var prop = _a[_i];
            formGroup[prop] = new forms_1.FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
        }
        this.form = new forms_1.FormGroup(formGroup);
    };
    DynamicFormComponent.prototype.mapValidators = function (validators) {
        var formValidators = [];
        if (validators) {
            for (var _i = 0, _a = Object.keys(validators); _i < _a.length; _i++) {
                var validation = _a[_i];
                if (validation === 'required') {
                    formValidators.push(forms_1.Validators.required);
                }
                else if (validation === 'min') {
                    formValidators.push(forms_1.Validators.minLength(validators[validation]));
                }
            }
        }
        return formValidators;
    };
    DynamicFormComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormComponent.prototype, "dataObject", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form',
            templateUrl: './dynamic.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic.component.js.map