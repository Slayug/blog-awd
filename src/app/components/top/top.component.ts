import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

    @Output() public requestOpenNavBar: EventEmitter<any> = new EventEmitter();
    @Output() public requestCloseNavBar: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    openNavBar(){
        this.requestOpenNavBar.emit(null);
    }

    closeNavBar(){
        console.log("close");
        this.requestCloseNavBar.emit(null);
    }
}
