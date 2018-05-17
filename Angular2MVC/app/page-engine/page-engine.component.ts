
import { Component, OnInit, ViewChild, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    moduleId: module.id,
    selector: 'page-engine',
    templateUrl: './page-engine.component.html'
})

export class PageEngineComponent implements OnInit {

    @Input() dataObject: any;
    form: FormGroup;
    //form: FormGroup = new FormGroup({});
    multfile: Array<any> = new Array();
    multiselectchecked: Array<any> = new Array();
    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd-mm-yyyy'
    };

    constructor(private fb: FormBuilder) {
    }

    ngOnChanges() {
        localStorage.setItem("pagedata", JSON.stringify(this.dataObject) );
    }

    ngOnInit() {
        
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

        const formGroup = {};
        for (let prop of this.dataObject.data) {
            formGroup[prop.key] = new FormControl(prop.value, this.mapValidators(prop.validation));

            /*if (prop.key == "uploadfile") {
                formGroup[prop.key] = this.fb.array([]);
            }
            else {
                formGroup[prop.key] = new FormControl(prop.value || '', this.mapValidators(prop.validation));
            }*/

            /*if (prop.type == "select") {
                formGroup[prop.key] = new FormControl(0, this.mapValidators(prop.validation));
            }
            else {
                formGroup[prop.key] = new FormControl(prop.value || '', this.mapValidators(prop.validation));
            }*/

        }
        
        //this.form = new FormGroup(formGroup);
        this.form = this.fb.group(formGroup);
    }

    private mapValidators(validators: any) {
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
            }
        }

        return formValidators;
    }

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

    private hasExclamationMark(input: FormControl) {
        const hasExclamation = input.value.indexOf('!') >= 0;
        return hasExclamation ? null : { needsExclamation: true };
    }

    onSubmit(form: any) {
        form["uploadfile"] = this.multfile;
        form["group"] = this.multiselectchecked;
        console.log(form);
    }

    onReset(form: any) {
        form.reset();
    }

    onSelect(event: any) {
        let file = event.files[0];
        this.multfile.push(file);
    }


    ngAfterViewInit() {
        this.getPlaceOnCity();
    }

    getPlaceOnCity(): void {
        this.form.get("city").valueChanges.subscribe(data => {

            //let places = this.dataObject.data.filter(d => d.key == "place")[0].options.filter(d => d.cityid == data);
            //let places = this.dataObject.data.filter(d => d.key == "place")[0];
            //let filterPlace = places.options.filter(d => d.cityid == data);
            //places.options = places.options.filter(d => d.cityid == data);
            //this.dataObject.data.filter(d => d.key == "place")[0] = places;

            let dataObj = JSON.parse(localStorage.getItem("pagedata"));
            let places = dataObj.data.filter(d => d.key == "place")[0];
            places.options = places.options.filter(d => d.cityid == data);
            this.dataObject.data.filter(d => d.key == "place")[0].options = places.options;
            this.form.get("place").setValue("");
        });
    }

    onChange(id: number, isChecked: boolean) {
        if (isChecked) {
            this.multiselectchecked.push(id);
        } else {
            let index: number = this.multiselectchecked.indexOf(id);
            if (index !== -1) {
                this.multiselectchecked.splice(index, 1);
            } 
        }
    }

}