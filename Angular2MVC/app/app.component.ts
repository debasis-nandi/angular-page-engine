import { Component } from "@angular/core"

@Component({
    selector: "user-app",
    template: `
                <div>
                    <nav class='navbar navbar-inverse'>
                        <div class='container-fluid'>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['home']">Home</a></li>
                                <li><a [routerLink]="['user']">Users Management</a></li>
                                <li><a [routerLink]="['datatable']">Data Table</a></li>
                                <li><a [routerLink]="['dws']">DWS</a></li>
                                <li><a [routerLink]="['chart']">D3 Chart</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                 </div>
                `
})

export class AppComponent {

}