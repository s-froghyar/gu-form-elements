import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gu-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class GuButtonComponent implements OnInit {
    @Input() title: string;
    
    constructor() { }

    ngOnInit() {
    }

}