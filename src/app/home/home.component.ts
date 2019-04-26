import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
    templateUrl: 'home.component.html',
    styleUrls: [ 
//   './node_modules/primeng/resources/primeng.min.css'
],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    constructor() {
    }

  
    items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'Available Actions ',
            items: [
                {label: 'Add Server', routerLink: ['/add'], icon: 'pi pi-fw pi-plus'},
                {label: 'Servers Table', routerLink: ['/servers'], icon: 'pi pi-fw pi-download'}
            ]
        }];
    }

}