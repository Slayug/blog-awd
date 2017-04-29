import { Component, OnInit, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss'],
    animations:[
        trigger('verticalOpen',[
            state('inactive',style({
                height: '0px',
                display: 'none'
            })),
            state('active',style({
                display: 'block',
                height: '200px'
            })),
            transition('active => inactive', animate('600ms ease-in')),
            transition('inactive => active', animate('600ms ease-out'))
        ]),
        trigger('rotateTriangle', [
            state('inactive', style({
                transform: 'rotate(90deg)'
            })),
            state('active', style({
                transform: 'rotate(0deg)'
            })),
            transition('active => inactive', animate('600ms ease-in')),
            transition('inactive => active', animate('600ms ease-out'))
        ])
    ]
})
export class PresentationComponent implements OnInit {

    openOrClose:string;
    @Input() contentShouldNotBeOpen: boolean = true;

    constructor() { }

    ngOnInit() {
        if( this.contentShouldNotBeOpen ){
            this.toggleContent();
        }
    }
    toggleContent(): void{
        if(this.openOrClose == 'inactive'){
            this.openOrClose = 'active'
        }
        else if(this.openOrClose == 'active'){
            this.openOrClose = 'inactive'
        }
        else{
            this.openOrClose = 'inactive';
        }
    }

}
