import { Component, Input } from '@angular/core';
import { TopComponent } from './components/top/top.component';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations:[
        trigger('horizontalOpen',[
            state('inactive',style({
                transform: 'translateX(-210px)',
                display: 'none'
            })),
            state('active',style({
                display: 'block',
                transform: 'translateX(210px)'
            })),
            transition('active => inactive', animate('1000ms ease-in')),
            transition('inactive => active', animate('1000ms ease-out'))
        ])
    ]
})
export class AppComponent {

    openOrClose:string;
    constructor(){
        this.openOrClose = 'inactive';
    }

    toggleNavBar(): void{
        if(this.openOrClose == 'inactive'){
            this.openOrClose = 'active'
        }
        else if(this.openOrClose == 'active'){
            this.openOrClose = 'inactive'
        }
        else{
            this.openOrClose = 'active';
        }
    }

    closeNavBar(): void{
        console.log("closeNavBar");
        if(this.openOrClose == 'active'){
            this.openOrClose = 'inactive'
        }
    }

}
