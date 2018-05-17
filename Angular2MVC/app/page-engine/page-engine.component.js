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
var PageEngineComponent = (function () {
    function PageEngineComponent(fb) {
        this.fb = fb;
        //form: FormGroup = new FormGroup({});
        this.multfile = new Array();
        this.multiselectchecked = new Array();
        this.myDatePickerOptions = {
            dateFormat: 'dd-mm-yyyy'
        };
    }
    PageEngineComponent.prototype.ngOnChanges = function () {
        localStorage.setItem("pagedata", JSON.stringify(this.dataObject));
    };
    PageEngineComponent.prototype.ngOnInit = function () {
        /*const formGroup = {};
        for (let prop of this.dataObject.data) {

            formGroup[prop.key] = new FormControl(prop.value || '', this.mapValidators(prop.validation));

            if (prop.key == "name") {
                formGroup[prop.key] = new FormControl(prop.value || '', [this.hasExclamationMark]);
            }
        }
        this.form = new FormGroup(formGroup);*/
        /*for (let prop of this.dataObject.data) {
            let control: FormControl = new FormControl();
            control.setValue(prop.value);
            //control.setValidators(this.mapValidators(prop.validation, control));
            this.mapValidators(prop.validation, control);
            this.form.addControl(prop.key, control);
        }*/
        var formGroup = {};
        for (var _i = 0, _a = this.dataObject.data; _i < _a.length; _i++) {
            var prop = _a[_i];
            formGroup[prop.key] = new forms_1.FormControl(prop.value, this.mapValidators(prop.validation));
        }
        //this.form = new FormGroup(formGroup);
        this.form = this.fb.group(formGroup);
    };
    PageEngineComponent.prototype.mapValidators = function (validators) {
        var formValidators = [];
        if (validators) {
            for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
                var validation = validators_1[_i];
                if (validation.required == true) {
                    formValidators.push(forms_1.Validators.required);
                }
                if (validation.min != null && validation.min > 0) {
                    formValidators.push(forms_1.Validators.minLength(validation.min));
                }
                if ((validation.email == true)) {
                    formValidators.push(forms_1.Validators.email);
                }
                if ((validation.needsExclamation == true)) {
                }
            }
        }
        return formValidators;
    };
    /*private mapValidators(validators: any, control: FormControl) {
        const formValidators: any = [];
        if (validators) {
            for (const validation of validators) {
                if (validation.required == true) {
                    formValidators.push(Validators.required);
                }
                if (validation.min != null && validation.min > 0) {
                    formValidators.push(Validators.minLength(validation.min));
                }
                if ((validation.email == true)) {
                    formValidators.push(Validators.email);
                }
                if ((validation.needsExclamation == true)) {
                    //formValidators.push(this.hasExclamationMark(control));
                }

                control.setValidators(formValidators);
                //control.updateValueAndValidity();
            }
        }

        return formValidators;
    }*/
    PageEngineComponent.prototype.hasExclamationMark = function (input) {
        var hasExclamation = input.value.indexOf('!') >= 0;
        return hasExclamation ? null : { needsExclamation: true };
    };
    PageEngineComponent.prototype.onSubmit = function (form) {
        form["uploadfile"] = this.multfile;
        form["group"] = this.multiselectchecked;
        console.log(form);
    };
    PageEngineComponent.prototype.onReset = function (form) {
        form.reset();
    };
    PageEngineComponent.prototype.onSelect = function (event) {
        var file = event.files[0];
        this.multfile.push(file);
    };
    PageEngineComponent.prototype.ngAfterViewInit = function () {
        this.getPlaceOnCity();
    };
    PageEngineComponent.prototype.getPlaceOnCity = function () {
        var _this = this;
        this.form.get("city").valueChanges.subscribe(function (data) {
            //let places = this.dataObject.data.filter(d => d.key == "place")[0].options.filter(d => d.cityid == data);
            //let places = this.dataObject.data.filter(d => d.key == "place")[0];
            //let filterPlace = places.options.filter(d => d.cityid == data);
            //places.options = places.options.filter(d => d.cityid == data);
            //this.dataObject.data.filter(d => d.key == "place")[0] = places;
            var dataObj = JSON.parse(localStorage.getItem("pagedata"));
            var places = dataObj.data.filter(function (d) { return d.key == "place"; })[0];
            places.options = places.options.filter(function (d) { return d.cityid == data; });
            _this.dataObject.data.filter(function (d) { return d.key == "place"; })[0].options = places.options;
            _this.form.get("place").setValue("");
        });
    };
    PageEngineComponent.prototype.onChange = function (id, isChecked) {
        if (isChecked) {
            this.multiselectchecked.push(id);
        }
        else {
            var index = this.multiselectchecked.indexOf(id);
            if (index !== -1) {
                this.multiselectchecked.splice(index, 1);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PageEngineComponent.prototype, "dataObject", void 0);
    PageEngineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-engine',
            templateUrl: './page-engine.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PageEngineComponent);
    return PageEngineComponent;
}());
exports.PageEngineComponent = PageEngineComponent;
//# sourceMappingURL=page-engine.component.js.map