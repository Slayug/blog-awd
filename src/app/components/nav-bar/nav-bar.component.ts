import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Output() public requestCloseNavBar: EventEmitter<any> = new EventEmitter();

    @Input() mobileVersion: boolean;

    constructor() { }

    ngOnInit() {
    }

    closeNavBar(){
        this.requestCloseNavBar.emit(null);
    }

    isMobileVersion(): boolean{
        return  this.mobileVersion;
    }

}
