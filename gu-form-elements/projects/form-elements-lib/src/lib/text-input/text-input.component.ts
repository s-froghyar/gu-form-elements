import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gu-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class GuTextInputComponent implements OnInit {
    @Input() label: string;
    @Input() placeHolder: string;
    
    constructor() { }

    ngOnInit() {
    }

}