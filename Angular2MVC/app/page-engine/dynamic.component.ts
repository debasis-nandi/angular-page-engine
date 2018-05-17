import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector:'dynamic-form',
    templateUrl: './dynamic.component.html'
})

export class DynamicFormComponent implements OnInit {

    @Input() dataObject: any;
    form: FormGroup;
    objectProps: any;

    constructor() {
    }

    ngOnChanges() {
    }

    ngOnInit() {

        this.objectProps =
            Object.keys(this.dataObject)
                .map(prop => {
                    return Object.assign({}, { key: prop }, this.dataObject[prop]);
                });
        // setup the form
        const formGroup = {};
        for (let prop of Object.keys(this.dataObject)) {
            formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
        }
        this.form = new FormGroup(formGroup);

    }

    private mapValidators(validators: any) {
        const formValidators: any = [];

        if (validators) {
            for (const validation of Object.keys(validators)) {
                if (validation === 'required') {
                    formValidators.push(Validators.required);
                } else if (validation === 'min') {
                    formValidators.push(Validators.minLength(validators[validation]));
                }
            }
        }

        return formValidators;
    }

    onSubmit(form: any) {
        console.log(form);
    }

}